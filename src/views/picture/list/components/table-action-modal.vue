<template>
  <n-modal v-model:show="modalVisible" preset="card" :title="title" class="w-700px">
    <n-form ref="formRef" :model="model" label-placement="top">
      <n-grid :cols="24" :x-gap="24">
        <n-form-item-gi :span="24" label="图片名称" path="inputValue">
          <n-input v-model:value="model.inputValue" placeholder="Input" />
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="图片描述" path="textareaValue">
          <n-input
            v-model:value="model.textareaValue"
            placeholder="Textarea"
            type="textarea"
            :autosize="{
              minRows: 3,
              maxRows: 5
            }"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="图片版权信息" path="textareaValue">
          <n-input
            v-model:value="model.textareaValue"
            placeholder="Textarea"
            type="textarea"
            :autosize="{
              minRows: 3,
              maxRows: 5
            }"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="点赞数量" path="inputNumberValue">
          <n-input-number v-model:value="model.inputNumberValue" />
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="标签" path="tags">
          <!-- <n-select v-model:value="model.multipleSelectValue" placeholder="Select" :options="generalOptions" multiple /> -->
          <tag-item v-model:tags="generalOptions" @update:tags="updateTags"></tag-item>
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="是否是R18" path="switchValue">
          <n-switch v-model:value="model.switchValue" />
        </n-form-item-gi>
        <n-form-item-gi :span="24" label="删除" class="deletItem">
          <n-space>
            <n-button round type="warning" @click="deletePic()"> 删除图片(软删除) </n-button>
            <n-button round type="error" @click="deleteSource()"> 删除(含源文件) </n-button>
          </n-space>
        </n-form-item-gi>
      </n-grid>
      <div style="display: flex; justify-content: flex-end; align-items: center">
        <n-button round type="primary" @click="deletePic()"> 保存 </n-button>
        <n-button round type="primary" @click="deleteSource()"> 取消 </n-button>
      </div>
    </n-form>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { FormInst } from 'naive-ui';
import tagItem from './tag-item.vue';
const title = '修改权限';
export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
}

defineOptions({ name: 'TableActionModal' });
const props = withDefaults(defineProps<Props>(), {
  visible: false
});
interface Emits {
  (e: 'update:visible', visible: boolean): void;
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
// const size = ref('medium');
const model = ref({
  inputValue: null,
  textareaValue: null,
  selectValue: null,
  multipleSelectValue: null,
  datetimeValue: null,
  nestedValue: {
    path1: null,
    path2: null
  },
  switchValue: false,
  checkboxGroupValue: null,
  radioGroupValue: null,
  radioButtonGroupValue: null,
  inputNumberValue: null,
  timePickerValue: null,
  sliderValue: 0,
  transferValue: null,
  buttonValue: {
    btn1: null,
    btn2: null
  }
});

let generalOptions: string[] = ['groode', 'veli good', 'emazing', 'lidiculous'];

const updateTags = (label: string[]) => {
  console.log('我会跟新tags', label);
  generalOptions = [...generalOptions, ...label];
};
const deletePic = () => {
  console.log('进行软删除');
};
const deleteSource = () => {
  console.log('删除源文件');
};
</script>

<style scoped></style>
