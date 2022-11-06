<template>
  <div>
    <main>
      <div class="h1">
        <h1 id="page-h1">Ролі та як їх отримати</h1>
      </div>
      <div class="article gif">
        <img
          src="https://cdn.buymeacoffee.com/uploads/project_updates/2022/01/ca8393efb2009f7d51eaed74e626fd2a.gif"
          alt="gif"
        />
      </div>
      <roles-component
        v-for="item in getRolesList"
        :key="item.id"
        :role-data="item"
      />
      <main-masterpage>
        <template v-slot:footer></template>
      </main-masterpage>
    </main>
  </div>
</template>

<script>
import MainMasterpage from "@/masterpage/MainMasterpage.vue";
import RolesComponent from "@/components/RolesList/RolesComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "RolesPage",

  components: {
    MainMasterpage,
    RolesComponent,
  },

  computed: {
    ...mapGetters(["getRolesList"]),
  },

  methods: {
    goToMain() {
      this.$router.push({ path: "/main" });
    },
    goToRules() {
      this.$router.push({ path: "/rules" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
