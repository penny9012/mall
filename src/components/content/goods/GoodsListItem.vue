<template>
  <div class="goods_item">
    <img :src="goodsItem.show.img" alt />
    <div class="goods_info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.goods_item {
  padding-bottom: 40px;
  position: relative;
  width: 49%;
}
.goods_item img {
  width: 100%;
  border-radius: 5px;
}
.goods_info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
  overflow: hidden;
}
.goods_info p {
  /* 文字溢出使用省略号显示 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods_info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods_info .collect {
  position: relative;
}
.goods_info .collect::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>