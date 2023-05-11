<template>
  <div class="h-full overflow-hidden">
    <n-card title="权限管理" :bordered="false" class="rounded-16px shadow-sm">
      <n-data-table
        :columns="columns"
        :data="tableData"
        :loading="loading"
        :pagination="pagination"
        max-height="550"
        scroll-x="1200"
      />
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { onMounted, reactive, ref } from 'vue';
import type { Ref } from 'vue';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { NTag } from 'naive-ui';
import { getchPermissionList } from '@/service';
import { useLoading } from '@/hooks';
import { useRoleLabels } from '~/src/constants';

const { loading, startLoading, endLoading } = useLoading(false);

const tableData = ref<UserManagement.Permission[]>([]);
function setTableData(data: UserManagement.Permission[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const { data } = await getchPermissionList();
  // console.log('获取权限列表', data);

  if (data) {
    setTimeout(() => {
      setTableData(data);
      endLoading();
    }, 1000);
  }
}
const columns: Ref<DataTableColumns<UserManagement.Permission>> = ref([
  {
    key: 'id',
    title: '序号',
    align: 'center'
  },
  {
    key: 'name',
    title: '用户名',
    align: 'center'
  },
  {
    key: 'description',
    title: '描述',
    align: 'center'
  },
  {
    key: 'type',
    title: '类型',
    align: 'center',
    render: row => {
      if (row.type) {
        const tagTypes: Record<UserManagement.RoleKey, NaiveUI.ThemeColor> = {
          '0': 'success',
          '1': 'error'
        };
        return <NTag type={tagTypes[row.type]}>{useRoleLabels[row.type]}</NTag>;
      }
      return <span></span>;
    }
  }
]) as Ref<DataTableColumns<UserManagement.Permission>>;

const pagination: PaginationProps = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 15, 20, 25, 30],
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  }
});

function init() {
  getTableData();
}

// 初始化
onMounted(() => {
  init();
});
</script>

<style scoped></style>
