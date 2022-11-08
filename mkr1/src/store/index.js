import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      listData: [
        {
          routeNumber: 0,
          driver: "John",
          price: 100,
          departure: "9.00",
          arrival: "10.00",
        },
        {
          routeNumber: 1,
          driver: "Max",
          price: 130,
          departure: "8.00",
          arrival: "11.00",
        },
        {
          routeNumber: 2,
          driver: "John",
          price: 70,
          departure: "8.30",
          arrival: "9.00",
        },
        {
          routeNumber: 3,
          driver: "Paul",
          price: 190,
          departure: "7.00",
          arrival: "16.00",
        },
        {
          routeNumber: 4,
          price: 50,
          departure: "7.00",
          arrival: "7.30",
        },
      ],
    };
  },
  getters: {
    getListData: (state) => state.listData,
    getRouteById: (state) => (id) => {
      return state.listData[id];
    },
  },

  mutations: {
    addNewRoute(state, arr) {
      state.listData.push(arr);
      console.log("add");
    },
    editRoute(state, arr) {
      state.listData[arr[0]] = arr[1];
      console.log("edit");
    },
    deleteRoute(state, routeNumber) {
      state.listData = state.listData.filter(
        (item) => item.routeNumber !== routeNumber
      );
      console.log("Deleted");
    },
  },
  actions: {
    addNewRouteAction({ commit }, arr) {
      commit("addNewRoute", arr);
    },
    editRouteAction({ commit }, arr) {
      commit("editRoute", arr);
    },
    deleteRouteAction({ commit }, routeNumber) {
      commit("deleteRoute", routeNumber);
    },
  },
});

export default store;
