<template>
  <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" x-gap="16" y-gap="16">
    <n-grid-item v-for="pic in picList" :key="pic.id">
      <n-card :title="pic.description">
        <template #cover>
          <img :src="pic.url" />
        </template>
        卡片内容
      </n-card>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { fetchPictureList } from '~/src/service/api/picture';

let picList: PicManagement.Pic[] = reactive([]);
const getPicList = async () => {
  const { data } = await fetchPictureList();
  picList = data!;
};

function init() {
  getPicList();
}
// 初始化
init();
</script>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}

.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
