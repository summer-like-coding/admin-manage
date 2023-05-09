<template>
  <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" x-gap="16" y-gap="16">
    <n-skeleton v-if="loading" :repeat="6" height="200" />
    <template v-else>
      <n-grid-item v-for="pic in picList" :key="pic.id">
        <n-card @click="showInfo(pic.id)">
          <n-image
            :width="pic.size"
            :src="pic.url"
            fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
          <template #footer>
            <n-skeleton v-if="loading" text width="60%" />
            <template v-else>编号: {{ pic.id }}</template>
          </template>

          <table-action-modal v-model:visible="visible" :edit-data="editData" />
        </n-card>
      </n-grid-item>
    </template>
  </n-grid>
  <n-pagination v-model:page="page" :page-count="100" size="large" @on-update:page="changePage(page)" />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useBoolean, useLoading } from '@/hooks';
import { fetchPictureList } from '~/src/service/api/picture';
import TableActionModal from './components/table-action-modal.vue';
const { bool: visible, setTrue: openModal } = useBoolean();
let picList: PicManagement.Pic[] = reactive([]);
// 使用loading加载
const { loading, startLoading, endLoading } = useLoading(false);
// 设置currentPage和pageSize
const page = ref(1);
const size = ref(50);

// 设置修改的数据
const editData = ref<PicManagement.Pic | null>(null);

const getPicListData = async () => {
  startLoading();
  const { data } = await fetchPictureList(page.value, size.value);
  if (data) {
    setTimeout(() => {
      picList = data;
      endLoading();
    }, 1000);
  }
};
/**
 * 改变页码
 */

const changePage = (curPage: number) => {
  // setEditData()
  console.log('当前页面', curPage);
};

/**
 * 展示详细信息
 */

const showInfo = (uid: number) => {
  console.log('当前图片', uid);
  openModal();
};
function init() {
  getPicListData();
}
// 初始化
init();
</script>

<style scoped>
.n-grid {
  height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
