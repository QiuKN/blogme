<template>
  <div class="diors-header">
    <div class="diors-header-box clearfix">
      <div class="diors-header-text fl">
        <a href="#">DiorsQiu</a>
        <p>手握日月摘星辰,世间无我这般人</p>
      </div>
      <div class="diors-header-avatar fr">
        <img src="@/assets/images/avatar.jpg" width="60" alt="diors" />
      </div>
    </div>
    <div class="diors-header-nav">
      <ul>
        <li>
          <a href="/">首页</a>
        </li>
        <li>
          <a href="/article">文章</a>
        </li>
        <li>
          <a href="/about">简历</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="less">
.diors-header {
  padding: 50px;
  position: relative;
  z-index: 3;
  background: #fff;
  .diors-header-box {
    .diors-header-text {
      > a {
        font-size: 1.5rem;
      }
      > p {
        margin: 10px 0 0 0;
      }
    }
    .diors-header-avatar {
      > img {
        border-radius: 20%;
      }
    }
  }
  .diors-header-nav {
    > ul {
      > li {
        float: left;
        margin: 10px 10px 0 0;
        > a {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
