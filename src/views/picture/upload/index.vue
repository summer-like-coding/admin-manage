<template>
  <n-layout>
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">
        <n-space vertical>
          <n-upload multiple directory-dnd action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :max="5">
            <n-upload-dragger>
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <SvgIcon icon="material-symbols:cloud-upload"></SvgIcon>
                </n-icon>
              </div>
              <n-text style="font-size: 16px"> 点击或者拖动文件到该区域来上传 </n-text>
            </n-upload-dragger>
          </n-upload>
          <n-space>
            <n-upload
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :headers="{
                'naive-info': 'hello!'
              }"
              :data="{
                'naive-data': 'cool! naive!'
              }"
            >
              <!-- action:请求提交的地址，headers附加的头部 ,data需要附加的数据-->
              <n-button type="primary" @click="uploadPic"> 上传图片 </n-button>
            </n-upload>
            <n-button type="warning"> 开始打码</n-button>
          </n-space>
        </n-space>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <n-form ref="rightFormRef" :model="model" label-placement="top">
          <n-grid :cols="12" :x-gap="24">
            <n-form-item-gi :span="12" label="图片名称" path="inputValue">
              <n-input v-model:value="model.inputValue" placeholder="Input" />
            </n-form-item-gi>
            <n-form-item-gi :span="12" label="图片目录" path="multipleSelectValue">
              <n-select v-model:value="model.multipleSelectValue" placeholder="Select" :options="generalOptions" />
            </n-form-item-gi>
            <n-form-item-gi :span="12" label="图片描述" path="textareaValue">
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
            <n-form-item-gi :span="12" label="图片标签" path="multipleSelectValue">
              <n-select
                v-model:value="model.multipleSelectValue"
                placeholder="Select"
                :options="generalOptions"
                multiple
              />
            </n-form-item-gi>
            <n-form-item-gi :span="12" label="动漫分类" path="selectValue">
              <n-select v-model:value="model.selectValue" placeholder="Select" :options="generalOptions" />
            </n-form-item-gi>
            <n-gi :span="12">
              <div style="display: flex; justify-content: flex-end">
                <n-button type="primary"> 上传 </n-button>
              </div>
            </n-gi>
          </n-grid>
        </n-form>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FormInst } from 'naive-ui';

const rightFormRef = ref<FormInst | null>(null);

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
  transferValue: null
});
const generalOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(v => ({
  label: v,
  value: v
}));
const uploadPic = () => {};
</script>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(248, 248, 248, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(248, 248, 248, 0.3);
}

.n-layout-content {
  background: rgba(248, 248, 248, 0.4);
}
</style>
