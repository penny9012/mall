<template>
  <!-- <div class="tab-bar-item">首页</div> -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    //父传子
    path: String,
    activeColor: {
      type: String,
      default: "#ff5777"
    }
  },
  data() {
    return {
      // isAvtive: "true"
    };
  },
  computed: {
    isActive() {
      //$route 选中的是index.js当中routes处于活跃的那个组件  如果选中的route不为false将呈现
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}; //先去isActive请问哪个组件处于活跃 如果活跃改颜色 activerColor动态获取
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle; /*去除图片与文字之间的间距*/
  margin-top: 3px;
  margin-bottom: 5px;
}
</style>