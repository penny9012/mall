<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend_item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  width: 100%;
  font-size: 12px;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
}
.recommend_item {
  flex: 1;
}
.recommend_item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>