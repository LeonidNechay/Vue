<template>
  <div>
    <h1>Main</h1>
    <div class="list-container">
      <bus-route
        v-for="item in getListData"
        :key="item.routeNumber"
        :routeNumber="item.routeNumber"
        :driver="item.driver"
        :price="item.price"
        :departure="item.departure"
        :arrival="item.arrival"
      />
    </div>
  </div>
</template>

<script>
// import busRouteList from "@/components/index.vue";
import busRoute from "@/components/busRoute.vue";
import { mapGetters } from "vuex";
export default {
  name: "MainPage",
  components: {
    busRoute,
  },
  computed: {
    ...mapGetters(["getListData"]),
  },
  methods: {
    goToAdd() {
      this.$router.push({ path: "/add" });
    },
    goToEdit() {
      this.$router.push({ path: "/edit" });
    },
  },
};
</script>

<style lang="css" scoped>
.list-container {
  display: flex;
}
</style>
