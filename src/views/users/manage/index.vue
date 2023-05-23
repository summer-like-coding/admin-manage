<template>
  <div class="h-full overflow-hidden">
    <n-card title="角色管理" :bordered="false" class="rounded-16px shadow-sm">
      <n-data-table
        :columns="columns"
        :data="tableData"
        :loading="loading"
        :pagination="pagination"
        max-height="550"
        scroll-x="1200"
      />
      <table-action-modal v-model:visible="visible" :edit-data="editData" />
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { userStatusLabels } from '@/constants';
import { fetchRoleList, fetchRoleDetail } from '@/service';
import { useBoolean, useLoading } from '@/hooks';
import TableActionModal from './components/table-action-modal.vue';

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: visible, setTrue: openModal } = useBoolean();

const tableData = ref<UserManagement.User[]>([]);
function setTableData(data: UserManagement.User[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const { data } = await fetchRoleList();
  if (data) {
    setTimeout(() => {
      setTableData(data);
      endLoading();
    }, 1000);
  }
}

const columns: Ref<DataTableColumns<UserManagement.User>> = ref([
  {
    key: 'id',
    title: '序号',
    align: 'center'
  },
  {
    key: 'name',
    title: '角色名称',
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
        const tagTypes: Record<UserManagement.UserStatusKey, NaiveUI.ThemeColor> = {
          '1': 'success',
          '2': 'error',
          '3': 'warning',
          '4': 'default'
        };

        return <NTag type={tagTypes[row.type]}>{userStatusLabels[row.type]}</NTag>;
      }
      return <span></span>;
    }
  },
  {
    key: 'actions',
    title: '操作',
    align: 'center',
    render: row => {
      return (
        <NSpace justify={'center'}>
          <NButton size={'small'} onClick={() => handleEditTable(row.id)}>
            修改权限
          </NButton>
          <NPopconfirm onPositiveClick={() => handleDeleteTable(row.id)}>
            {{
              default: () => '确认删除',
              trigger: () => <NButton size={'small'}>删除角色</NButton>
            }}
          </NPopconfirm>
        </NSpace>
      );
    }
  }
]) as Ref<DataTableColumns<UserManagement.User>>;

const editData = ref<UserManagement.RolePermission | null>(null);

function setEditData(data: UserManagement.RolePermission | null) {
  editData.value = data;
}

async function handleEditTable(rowId: number) {
  // 根据id获取数据
  const { data } = await fetchRoleDetail(rowId);
  if (data) {
    setEditData(data);
  }
  openModal();
}

function handleDeleteTable(rowId: number) {
  window.$message?.info(`点击了删除，rowId为${rowId}`);
}

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
init();
</script>

<style scoped></style>
