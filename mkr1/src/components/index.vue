<template>
  <div class="list_container">
    <bus-route
      v-for="item in busRoutesListData"
      :key="item.routeNumber"
      :driver="item.driver"
      :price="item.price"
      :departure="item.departure"
      :arrival="item.arrival"
    />
  </div>
</template>

<script>
import busRoute from "./busRoute.vue";
export default {
  name: "busRouteList",

  components: {
    busRoute,
  },

  props: {
    busRoutesListData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.list_container {
  display: flex;
}
</style>
