<template>
  <n-modal v-model:show="modalVisible" preset="card" :title="title" class="w-700px">
    <n-form ref="formRef" label-placement="left" :label-width="80" :model="formModel" :rules="rules">
      <n-grid :cols="24" :x-gap="18">
        <n-form-item-grid-item :span="12" label="用户名" path="username">
          <n-input v-model:value="formModel.username" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="年龄" path="age">
          <n-input-number v-model:value="formModel.age" clearable />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="性别" path="gender">
          <n-radio-group v-model:value="formModel.gender">
            <n-radio v-for="item in genderOptions" :key="item.value" :value="item.value">{{ item.label }}</n-radio>
          </n-radio-group>
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="手机号" path="phone">
          <n-input v-model:value="formModel.phone" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="邮箱" path="email">
          <n-input v-model:value="formModel.email" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="状态" path="status">
          <n-select v-model:value="formModel.status" :options="userStatusOptions" />
        </n-form-item-grid-item>
      </n-grid>
      <n-space class="w-full pt-16px" :size="24" justify="end">
        <n-button class="w-72px" @click="closeModal">取消</n-button>
        <n-button class="w-72px" type="primary" @click="handleSubmit">确定</n-button>
      </n-space>
    </n-form>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue';
import type { FormInst, FormItemRule } from 'naive-ui';
import { genderOptions, userStatusOptions } from '@/constants';
import { formRules, createRequiredFormRule } from '@/utils';

export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
  /** 编辑的表格行数据 */
  editData?: UserManagement.User | null;
}

defineOptions({ name: 'TableActionModal' });

const props = withDefaults(defineProps<Props>(), {
  type: 'edit',
  editData: null
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
const closeModal = () => {
  modalVisible.value = false;
};

const title = '编辑用户';

const formRef = ref<HTMLElement & FormInst>();

type FormModel = Pick<UserManagement.User, 'username' | 'age' | 'gender' | 'phone' | 'email' | 'status'>;

const formModel = reactive<FormModel>(createDefaultFormModel());

const rules: Record<keyof FormModel, FormItemRule | FormItemRule[]> = {
  username: createRequiredFormRule('请输入用户名'),
  age: createRequiredFormRule('请输入年龄'),
  gender: createRequiredFormRule('请选择性别'),
  phone: formRules.phone,
  email: formRules.email,
  status: createRequiredFormRule('请选择用户状态')
};

function createDefaultFormModel(): FormModel {
  return {
    username: '',
    age: null,
    gender: 0,
    phone: '',
    email: null,
    status: 1
  };
}

function handleUpdateEdit() {
  if (props.editData) {
    Object.assign(formModel, props.editData);
    // console.log('原本数据', props.editData);
    // console.log('formModel', formModel);
  }
}

async function handleSubmit() {
  await formRef.value?.validate();
  window.$message?.success('修改成功!');
  // console.log('数据', formModel);
  closeModal();
}

watch(
  () => props.visible,
  newValue => {
    if (newValue) {
      handleUpdateEdit();
    }
  }
);
</script>

<style scoped></style>
