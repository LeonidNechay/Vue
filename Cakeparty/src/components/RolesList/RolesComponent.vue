<template>
  <div class="flex article">
    <h2>{{ roleData.title }}</h2>
    <i class="fa-solid fa-plus" @click="onAdd(roleData.id)"></i>
    <div
      class="role"
      v-for="opt in roleData.description.optionsList"
      :key="opt.id"
    >
      <div class="actions">
        <i class="fa-solid fa-pen" @click="onUpdate(roleData.id, opt.id)"></i>
        <i
          class="fa-solid fa-trash"
          @click="onDelete([roleData.id, opt.id])"
        ></i>
      </div>
      <div class="role-text">
        <strong :style="titleStyle(opt.color, opt.backgroundColor)">{{
          opt.title
        }}</strong>
      </div>
      <div class="role-text">
        {{ opt.description }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RolesComponent",

  props: {
    roleData: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions(["deleteRoleAction"]),

    onDelete(arr) {
      this.deleteRoleAction(arr);
    },
    onAdd(typeId) {
      this.$router.push({
        name: "add",
        params: { id: typeId },
      });
    },
    onUpdate(typeId, roleId) {
      this.$router.push({
        name: "edit",
        params: { id: typeId, roleid: roleId },
      });
    },
    titleStyle(color, backgroundColor) {
      return { color: color, backgroundColor: backgroundColor };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/roles";
</style>
