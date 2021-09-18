<template>
  <div class="diors-topnav">
    <ul class="clearfix">
      <li>
        <a href="javasciprt:;" @click.stop="register">注册</a>
      </li>
      <li>
        <a href="javascript:;">登陆</a>
      </li>
    </ul>
  </div>
  <RegisterDialog ref="registerdialog" />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue';
import RegisterDialog from '@/components/Dialog/register.vue';

export default defineComponent({
  components: {
    RegisterDialog,
  },
  setup() {
    const registerdialog = ref(null);
    const data = reactive({});

    const register = () => {
      if (registerdialog && registerdialog.value) {
        registerdialog.value.showRegisterDialog();
      }
    };

    return {
      ...toRefs(data),
      registerdialog,
      register,
    };
  },
});
</script>

<style lang="less">
.diors-topnav {
  padding: 10px 0 0 0;
  margin: 0 0 20px 0;
  > ul {
    margin: 0 auto;
    width: 1000px;
    > li {
      margin: 0 10px 0 0;
      float: left;
      > a {
        font-size: 14px;
      }
    }
  }
}
</style>
