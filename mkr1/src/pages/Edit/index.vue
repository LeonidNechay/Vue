<template>
  <div>
    <h1>Edit</h1>
    <h2>Enter driver</h2>
    <input type="text" v-model="driver" />
    <h2>Enter price</h2>
    <input type="number" v-model="price" />
    <h2>Enter departure time</h2>
    <input type="text" v-model="departure" />
    <h2>Enter arrival time</h2>
    <input type="text" v-model="arrival" />
    <br />
    <br />
    <button @click="editRoute()">Submit</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EditPage",
  data() {
    return {
      routeNumber: 0,
      driver: "No name",
      price: 0,
      departure: "No departure",
      arrival: "No arrival",
    };
  },
  computed: {
    ...mapGetters(["getRouteById"]),
    receivedRouteId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(["editRouteAction"]),
    editRoute() {
      this.editRouteAction([
        this.receivedRouteId,
        {
          routeNumber: this.routeNumber,
          driver: this.driver,
          price: this.price,
          departure: this.departure,
          arrival: this.arrival,
        },
      ]);
      this.$router.push({
        name: "main",
      });
    },
    goToMain() {
      this.$router.push({ path: "/" });
    },
    goToAdd() {
      this.$router.push({ path: "/add" });
    },
  },
  mounted() {
    const route = this.getRouteById(this.receivedRouteId);
    if (route) {
      (this.routeNumber = route.routeNumber),
        (this.driver = route.driver),
        (this.price = route.price),
        (this.departure = route.departure),
        (this.arrival = route.arrival);
    }
  },
};
</script>

<style lang="scss" scoped></style>
