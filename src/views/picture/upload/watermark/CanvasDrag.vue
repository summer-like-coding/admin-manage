<template>
  <div>
    <n-space vertical>
      <div class="canvas-wrapper">
        <canvas class="canvas" width="500" height="300"></canvas>
      </div>
      <n-space vertical>
        <n-slider
          :default-value="50"
          :step="10"
          :format-tooltip="formatTooltip"
          :min="10"
          :max="200"
          @update:value="set_size"
        />
        <n-space justify="center">
          <n-button @click="finished">
            {{ is_finished ? '重新打码' : '完成打码' }}
          </n-button>
        </n-space>
      </n-space>
    </n-space>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import watermark_img from '@/assets/watermark/watermark.png';
import eventBus from '@/utils/eventbus';
import type { Mouse } from '../common/drag';
import { DragGraph } from '../common/drag';
const watermark = new Image();
watermark.src = watermark_img;
const is_finished = ref(false);

// 水印组
const graphs: DragGraph[] = [];
const graph_ref = ref('');
const tempGraphArr: DragGraph[] = [];
const selected = ref(-1);
const ranger = ref(10);
const active_x = ref(20);
const active_y = ref(20);
/** slider数值弹出 */
const formatTooltip = (value: number) => {
  return `${value}`;
};

/**
 * 打码切换
 */
const finished = () => {
  is_finished.value = !is_finished.value;
};

/**
 * 删除一个码图
 */
const del_mark = (e: Event) => {
  e.preventDefault();
  if (selected.value > -1) {
    graphs[0].erase();
    graphs.splice(selected.value, 1);
    selected.value -= 1;
    if (selected.value > -1) {
      ranger.value = graphs[selected.value].h;
    }
    // draw_graph();
    // emit_message();
  }
};
/**
 * 重绘 canvas
 */
const draw_graph = () => {
  graphs.forEach(graph => {
    graph.paint();
  });
  if (selected.value > -1) {
    graphs[selected.value].selected();
  }
};
/**
 * 添加一个码图
 */
const add_mark = (e: Event, size?: number) => {
  e.preventDefault();
  const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
  if (size) {
    graphs.push(new DragGraph(active_x.value - size / 2, active_y.value - size / 2, size, size, canvas, watermark));
  } else {
    graphs.push(new DragGraph(active_x.value - 20, active_y.value - 20, 40, 40, canvas, watermark));
  }
  if (selected.value > -1) {
    selected.value = graphs.length - 1;
  } else {
    selected.value = 0;
  }
  ranger.value = graphs[selected.value].h;
  graphs[0].erase();
  draw_graph();
  // emit_message();
};
/**
 * 定义快捷键
 */
const shortcut = (e: KeyboardEvent) => {
  const key = e.key.toLowerCase();
  switch (key) {
    case 'a':
      add_mark(e);
      break;
    case 'd':
      del_mark(e);
      break;
    case '1':
      add_mark(e, 20);
      break;
    case '2':
      add_mark(e, 30);
      break;
    case '3':
      add_mark(e, 50);
      break;
    case '4':
      add_mark(e, 70);
      break;
    case '5':
      add_mark(e, 120);
      break;
    default:
      break;
  }
};
/**
 * 设置码大小
 */
const set_size = () => {
  // e.preventDefault();
  if (selected.value > -1) {
    graphs[selected.value].w = ranger.value;
    graphs[selected.value].h = ranger.value;
    graphs[selected.value].erase();
  }
  draw_graph();
  // emit_message();
};
/**
 * 更新水印
 */
const update_status = () => {
  if (is_finished.value) {
    document.removeEventListener('keydown', shortcut);
  } else {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    graphs.splice(0, graphs.length);
    selected.value = -1;
    document.addEventListener('keydown', shortcut);
  }
};
/**
 * 在注册事件里面注册事件
 */
onMounted(() => {
  eventBus.on('imgSrc', (imgSrc: string) => {
    // 不知道为啥，用ref获取不到canvas
    // 获取canvas，并在上面绘制图片
    const canvas = document.querySelector('canvas')!;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      ctx!.drawImage(img, 0, 0, 500, 300);
    };
    // 开始打水印
    update_status();
    // 更新canvas
    draw_graph();
    canvas.addEventListener('click', (e: MouseEvent) => {
      const mouse: Mouse = {
        x: e.clientX - canvas.getBoundingClientRect().left,
        y: e.clientY - canvas.getBoundingClientRect().top
      };
      active_x.value = mouse.x;
      active_y.value = mouse.y;
      graphs.forEach((shape, index) => {
        if (shape.is_mouse_in_graph(mouse)) {
          selected.value = index;
          ranger.value = shape.h;
        }
      });
      if (selected.value > -1) {
        graphs[selected.value].erase();
        draw_graph();
      }
    });
    canvas.addEventListener(
      'mousedown',
      (e: MouseEvent) => {
        const mouse: Mouse = {
          x: e.clientX - canvas.getBoundingClientRect().left,
          y: e.clientY - canvas.getBoundingClientRect().top
        };
        graphs.forEach((shape, index) => {
          const offset: Mouse = {
            x: mouse.x - shape.x,
            y: mouse.y - shape.y
          };
          if (shape.is_mouse_in_graph(mouse)) {
            tempGraphArr.push(shape);
            const mousemove_callback = (event: MouseEvent) => {
              const mouse_temp: Mouse = {
                x: event.clientX - canvas.getBoundingClientRect().left,
                y: event.clientY - canvas.getBoundingClientRect().top
              };
              if (shape === tempGraphArr[tempGraphArr.length - 1]) {
                shape.x = mouse_temp.x - offset.x;
                shape.y = mouse_temp.y - offset.y;
                shape.erase();
                draw_graph();
              }
              graph_ref.value = JSON.stringify(graphs);
            };
            const mouseup_callback = () => {
              tempGraphArr.splice(0, tempGraphArr.length);
              // emit_message();
              canvas.removeEventListener('mousemove', mousemove_callback, false);
              canvas.removeEventListener('mouseup', mouseup_callback, false);
            };
            canvas.addEventListener('mousemove', mousemove_callback, false);
            canvas.addEventListener('mouseup', mouseup_callback, false);
            selected.value = index;
            ranger.value = shape.h;
          }
        });
        e.preventDefault();
      },
      false
    );
  });
});

/**
 * 在销毁时销毁事件
 */
onUnmounted(() => {
  eventBus.off('imgSrc');
});
</script>
<style scoped>
.canvas-wrapper {
  margin: 0 auto;
}

canvas {
  border: 1px solid #000;
  margin: 0 auto;
}

.canvas-wrapper {
  overflow-x: scroll;
}

.canvas-edit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
