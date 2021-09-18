<template>
  <el-dialog title="注册" v-model="registerDialog" width="30%" center>
    <div>
      <el-form :model="registerForm" :rules="registerrules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input v-model="registerForm.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="registerDialog = false">取 消</el-button>
        <el-button type="primary" @click="registerDialog = false">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup(props, { attrs, emit, slots }) {
    const data = reactive({
      registerDialog: false,
      registerForm: {
        account: '',
        password: '',
      },
      registerrules: {
        account: [{ required: true, message: '请输入注册账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入注册密码', trigger: 'blur' }],
      },
    });
    const showRegisterDialog = () => {
      data.registerDialog = true;
    };
    return {
      ...toRefs(data),
      showRegisterDialog,
    };
  },
});
</script>
