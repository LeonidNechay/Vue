<template>
  <div>
    <div class="card">
      <div>Route number - {{ routeNumber }}</div>
      <div>Driver - {{ driver }}</div>
      <div>Price - {{ price }}$</div>
      <div>Departure time - {{ departure }}</div>
      <div>Arrival time - {{ arrival }}</div>
    </div>
    <button @click="onEdit(routeNumber)">Edit</button>
    <button @click="onDelete(routeNumber)">Delete</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "busRoute",

  props: {
    routeNumber: {
      type: Number,
      default: 0,
    },
    driver: {
      type: String,
      default: "No name",
    },
    price: {
      type: Number,
      default: 0,
    },
    departure: {
      type: String,
      default: "No departure",
    },
    arrival: {
      type: String,
      default: "No arrival",
    },
  },
  methods: {
    ...mapActions(["deleteRouteAction"]),
    onEdit(id) {
      this.$router.push({
        name: "edit",
        params: { id: id },
      });
    },
    onDelete(id) {
      this.deleteRouteAction(id);
    },
  },
};
</script>

<style lang="css" scoped>
.card {
  width: 140px;
  height: 140px;
  background-color: lightcyan;
  margin: 10px;
  padding: 11px;
  border-radius: 5px;
}
.card div {
  margin: 3px;
  background-color: lightblue;
  padding: 1px;
  border-radius: 2px;
}
button {
  margin-left: 25px;
}
</style>
