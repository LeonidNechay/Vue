import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      listData: [
        {
          id: 0,
          title: "Стандартні ролі",
          description: {
            optionsList: [
              {
                id: 0,
                title: "@Плебей",
                description: "видається всім при вході",
                color: "rgb(93,119,133)",
                backgroundColor: "rgba(93,119,133, 0.2)",
              },
              {
                id: 1,
                title: "@💙",
                description: "видається хлопцям",
                color: "rgb(83,152,190)",
                backgroundColor: "rgba(83,152,190,0.2)",
              },
              {
                id: 2,
                title: "@💗",
                description: "видається дівчатам",
                color: "rgb(212,125,175)",
                backgroundColor: "rgba(212,125,175,0.2)",
              },
            ],
          },
        },
        {
          id: 1,
          title: "Видаваємі ролі",
          description: {
            optionsList: [
              {
                id: 0,
                title: "@Турбо гном",
                description: "видається найактивнішим учасникам",
                color: "rgb(0,101,187)",
                backgroundColor: "rgba(0,101,187, 0.2)",
              },
              {
                id: 1,
                title: "@Стрімер",
                description: "тут все зрозуміло",
                color: "rgb(83,152,190)",
                backgroundColor: "rgba(83,152,190,0.2)",
              },
              {
                id: 2,
                title: "@неадекват",
                description: "видається найбільш неадекватним",
                color: "rgb(212,125,175)",
                backgroundColor: "rgba(212,125,175,0.2)",
              },
            ],
          },
        },
        {
          id: 2,
          title: "Ролі за рівень",
          description: {
            optionsList: [
              {
                id: 0,
                title: "@💬Балабол",
                description: "видається на 25 рівні Mee6",
                color: "rgb(205, 72, 59)",
                backgroundColor: "rgba(205, 72, 59, 0.2)",
              },
              {
                id: 1,
                title: "@БАТЯ ЧАТА",
                description: "видається на 50 рівні Mee6",
                color: "rgb(108, 54, 131)",
                backgroundColor: "rgba(108, 54, 131, 0.2)",
              },
              {
                id: 2,
                title: "@🏠Постоялець",
                description: "видається на 25 рівні Lacuna",
                color: "rgb(46, 203, 112)",
                backgroundColor: "rgba(46, 203, 112, 0.2)",
              },
              {
                id: 3,
                title: "@БАТЯ ВОЙСА",
                description: "видається на 50 рівні Lacuna",
                color: "rgb(164, 22, 84)",
                backgroundColor: "rgba(164, 22, 84, 0.2)",
              },
            ],
          },
        },
        {
          id: 3,
          title: "Спонсорські ролі",
          description: {
            optionsList: [
              {
                id: 0,
                title: "@Партнер",
                description: "видається за буст сервера",
                color: "rgb(153, 45, 34)",
                backgroundColor: "rgba(153, 45, 34, 0.2)",
              },
              {
                id: 1,
                title: "@Спонсор",
                description: "за внесок у розвиток сервера",
                color: "rgb(118, 26, 214)",
                backgroundColor: "rgba(118, 26, 214, 0.2)",
              },
            ],
          },
        },
        {
          id: 4,
          title: "Ролі адміністрації",
          description: {
            optionsList: [
              {
                id: 0,
                title: "@Редактор",
                description: "займається ролями та каналами",
                color: "rgb(123, 0, 179)",
                backgroundColor: "rgba(123, 0, 179, 0.2)",
              },
              {
                id: 1,
                title: "@Страший редактор",
                description: "займається ролями та каналами",
                color: "rgb(152, 45, 194)",
                backgroundColor: "rgba(152, 45, 194, 0.2)",
              },
              {
                id: 2,
                title: "@Модератор",
                description: "слідкує за порядком",
                color: "rgb(202, 31, 255)",
                backgroundColor: "rgba(202, 31, 255, 0.2)",
              },
              {
                id: 3,
                title: "@Адміністрація",
                description: "займається просуванням сервера",
                color: "rgb(188, 142, 230)",
                backgroundColor: "rgba(188, 142, 230, 0.2)",
              },
              {
                id: 4,
                title: "@Власник",
                description: "власник сервера",
                color: "rgb(217, 163, 255)",
                backgroundColor: "rgba(217, 163, 255, 0.2)",
              },
            ],
          },
        },
      ],
    };
  },
  getters: {
    getRolesList: (state) => state.listData,
    getRoleById: (state) => (id1, id2) => {
      return state.listData[id1].description.optionsList[id2];
    },
  },

  mutations: {
    addNewRole(state, arr) {
      state.listData[arr[0]].description.optionsList.push({
        ...arr[1],
      }),
        console.log("add");
    },
    editRole(state, arr) {
      state.listData[arr[0]].description.optionsList[arr[1].id] = arr[1];
      console.log("edit");
    },
    deleteRole(state, arr) {
      var b = state.listData[arr[0]].description.optionsList.findIndex(
        (item) => item.id === arr[1]
      );
      var newArr = state.listData[arr[0]].description.optionsList[b];
      state.listData[arr[0]].description.optionsList = state.listData[
        arr[0]
      ].description.optionsList.filter((item) => item.id !== newArr.id);
      console.log("Deleted");
    },
  },
  actions: {
    addNewRoleAction({ commit }, arr) {
      commit("addNewRole", arr);
    },
    editRoleAction({ commit }, arr) {
      commit("editRole", arr);
    },
    deleteRoleAction({ commit }, arr) {
      commit("deleteRole", arr);
    },
  },
});

export default store;
