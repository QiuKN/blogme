<!--
 * @Author: your name
 * @Date: 2021-09-13 15:29:13
 * @LastEditTime: 2021-09-13 17:02:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DiorsBlog\src\App.vue
-->
<template>
  <div id="diors-container">
    <div id="diors-box">
      <Header />
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Layout/Header.vue';
export default defineComponent({
  name: 'App',
  components: {
    Header,
  },
});
</script>
