<template>
  <div>
    <h1>Add</h1>
    <h2>Enter route number</h2>
    <input type="number" v-model="routeNumber" />
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
    <button @click="addRoute()">Submit</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddPage",
  data() {
    return {
      routeNumber: 0,
      driver: "",
      price: 0,
      departure: "",
      arrival: "",
    };
  },
  methods: {
    ...mapActions(["addNewRouteAction"]),
    addRoute() {
      this.addNewRouteAction({
        routeNumber: this.routeNumber,
        driver: this.driver,
        price: this.price,
        departure: this.departure,
        arrival: this.arrival,
      });
      this.$router.push({
        name: "main",
      });
    },
    goToMain() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
