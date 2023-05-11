<template>
  <n-modal v-model:show="modalVisible" preset="card" :title="title" class="w-700px">
    <n-form ref="formRef" :model="model" label-placement="top">
      <n-grid :cols="24" :x-gap="24">
        <n-form-item-gi :span="24" label="图片名称" path="name">
          <n-input v-model:value="model.name" placeholder="Input" />
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="图片描述" path="description">
          <n-input
            v-model:value="model.description"
            placeholder="Textarea"
            type="textarea"
            :autosize="{
              minRows: 3,
              maxRows: 5
            }"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="图片版权信息" path="copyright">
          <n-input
            v-model:value="model.copyright"
            placeholder="Textarea"
            type="textarea"
            :autosize="{
              minRows: 3,
              maxRows: 5
            }"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="点赞数量" path="likeCount">
          <n-input-number v-model:value="model.likeCount" />
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="标签" path="tags">
          <tag-item v-model:tags="generalOptions"></tag-item>
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="是否是R18" path="isR18">
          <n-switch v-model:value="model.isR18" />
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="删除" class="deletItem">
          <n-space>
            <n-button round type="warning" @click="deletePic()"> 删除图片(软删除) </n-button>
            <n-button round type="error" @click="deleteSource()"> 删除(含源文件) </n-button>
          </n-space>
        </n-form-item-gi>
      </n-grid>
      <div style="display: flex; justify-content: flex-end; align-items: center">
        <n-button round type="primary" @click="handleSubmit()"> 保存 </n-button>
        <n-button round type="primary" @click="deleteSource()"> 取消 </n-button>
      </div>
    </n-form>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { FormInst } from 'naive-ui';
import tagItem from './tag-item.vue';
const title = '修改图片信息';
export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
  /** 表单数据 */
  editData: PicManagement.Pic | null;
}

defineOptions({ name: 'TableActionModal' });
const props = withDefaults(defineProps<Props>(), {
  visible: false
});
interface Emits {
  (e: 'update:visible', visible: boolean): void;
  (e: 'update:editData', editData: PicManagement.Pic | null): void;
}
const emit = defineEmits<Emits>();
const modalVisible = computed({
  get() {
    return props.visible;
  },
  set(visible) {
    emit('update:visible', visible);
  }
});

// 表单数据
const formRef = ref<FormInst | null>(null);

// 创建默认表单数据
const model = {
  id: 0,
  name: '',
  description: '',
  likeCount: 0,
  size: '200',
  isR18: false,
  tags: [''],
  copyright: ''
};

const generalOptions = ref(['好物', '美食', '旅游', '风景', '人物', '动漫', '动物', '其他']);

function handleSubmit() {
  window.$message?.success('修改成功!');
  emit('update:visible', false);
}
const deletePic = () => {
  console.log('删除图片');
};
const deleteSource = () => {
  console.log('删除源文件');
};
</script>

<style scoped></style>
