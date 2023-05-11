<template>
  <n-layout>
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">
        <n-space vertical>
          <n-upload directory-dnd :custom-request="customRequest" action="#" :show-file-list="false">
            <n-upload-dragger v-show="!Imgvisible">
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <SvgIcon icon="material-symbols:cloud-upload"></SvgIcon>
                </n-icon>
              </div>
              <n-text style="font-size: 16px"> 点击或者拖动文件到该区域来上传 </n-text>
            </n-upload-dragger>
            <n-image v-show="Imgvisible" width="300" :src="imgSrc" />
          </n-upload>
          <n-space>
            <n-upload :custom-request="customRequest" action="#" :show-file-list="false">
              <n-button type="primary"> 上传图片 </n-button>
            </n-upload>
            <n-button type="warning" @click="start_watermark"> 开始打码</n-button>
          </n-space>
        </n-space>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <n-form ref="rightFormRef" :model="model" label-placement="top">
          <n-grid :cols="12" :x-gap="24">
            <n-form-item-gi :span="12" label="图片名称" path="name">
              <n-input v-model:value="model.name" placeholder="Input" />
            </n-form-item-gi>
            <n-form-item-gi :span="12" label="图片目录" path="catalog_id">
              <n-select v-model:value="model.catalog_id" placeholder="Select" :options="generalOptions" />
            </n-form-item-gi>
            <n-form-item-gi :span="12" label="图片描述" path="description">
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
            <n-form-item-gi :span="12" label="图片标签" path="tags">
              <n-select v-model:value="model.tags" placeholder="Select" :options="generalOptions" multiple />
            </n-form-item-gi>
            <n-form-item-gi :span="12" label="动漫分类" path="anime_id">
              <n-select v-model:value="model.anime_id" placeholder="Select" :options="generalOptions" />
            </n-form-item-gi>
            <n-gi :span="12">
              <div style="display: flex; justify-content: flex-end">
                <n-button type="primary" @click="submit"> 上传 </n-button>
              </div>
            </n-gi>
          </n-grid>
        </n-form>
      </n-layout-content>
    </n-layout>
    <mark-modal v-model:visible="visible"></mark-modal>
  </n-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { FormInst, UploadCustomRequestOptions } from 'naive-ui';
import { useBoolean } from '@/hooks';
import { leaf_catalogues, upload_temp } from '@/service/api/picture';
import eventBus from '@/utils/eventbus';
import markModal from './watermark/mark-modal.vue';
const rightFormRef = ref<FormInst | null>(null);
const { bool: visible, setTrue: openModal } = useBoolean();
const { bool: Imgvisible, setTrue: ShowImg } = useBoolean();
// 右侧数据
const model = ref({
  name: '',
  catalog_id: '',
  description: '',
  tags: [],
  anime_id: ''
});
// tags
const generalOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(v => ({
  label: v,
  value: v
}));
// 目录列表
const catalogues = ref<PicManagement.Catalog[]>([]);

// 设置图片src
const imgSrc = ref<string>('');

/**
 * 开始打码
 */
const start_watermark = (e: Event) => {
  e.preventDefault();
  // 先总线传递数据，再打开弹窗
  openModal();
  setTimeout(() => {
    eventBus.emit('imgSrc', imgSrc.value);
  }, 0);
};
/**
 * 上传图片
 */
const uploadPic = async (file: File) => {
  const { data } = await upload_temp(file);
  return data;
};
/**
 * 自定义上传
 */
const customRequest = (_options: UploadCustomRequestOptions) => {
  const file = _options.file.file as File;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    imgSrc.value = reader.result as string;
    ShowImg();
  };
  // 获取到图片的uuid
  uploadPic(file);
};
/**
 * 获取目录列表
 */
const getCatlogues = async () => {
  const { data } = await leaf_catalogues();

  if (data) {
    catalogues.value = data;
  }
};
/**
 * 初始化目录列表
 */
function init() {
  getCatlogues();
}

/**
 * 提交
 */
const submit = () => {
  rightFormRef.value?.validate();
  console.log('表单数据', model.value);
};
/**
 * 挂载
 */
onMounted(() => {
  init();
});
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
