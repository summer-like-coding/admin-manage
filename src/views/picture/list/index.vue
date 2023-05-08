<template>
  <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" x-gap="16" y-gap="16">
    <n-skeleton v-if="loading" :repeat="6" height="200" />
    <template v-else>
      <n-grid-item v-for="pic in picList" :key="pic.id">
        <n-card>
          <n-image
            :width="pic.size"
            :src="pic.url"
            fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
          <template #footer>
            <n-skeleton v-if="loading" text width="60%" />
            <template v-else>编号: {{ pic.id }}</template>
          </template>
        </n-card>
      </n-grid-item>
    </template>
  </n-grid>
  <page-pagination></page-pagination>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import useLoading from '~/src/hooks/common/use-loading';
import { fetchPictureList } from '~/src/service/api/picture';

// const PicSize = computed((size: string) => Number(size));

let picList: PicManagement.Pic[] = reactive([]);
// 使用loading加载
const { loading, startLoading, endLoading } = useLoading(false);
const getPicListData = async () => {
  startLoading();
  const { data } = await fetchPictureList();
  if (data) {
    setTimeout(() => {
      picList = data;
      endLoading();
    }, 1000);
  }
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
