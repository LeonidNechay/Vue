<template>
  <div>
    <main>
      <h1 class="main-h1">Edit Role</h1>
      <div class="article">
        <h2>Enter id</h2>
        <input type="number" min="0" max="10" v-model="id" />
      </div>
      <div class="article">
        <h2>Enter title</h2>
        <input type="text" v-model="title" />
      </div>
      <div class="article">
        <h2>Enter description</h2>
        <input type="text" v-model="description" />
      </div>
      <div class="article">
        <h2>Enter color(rgb)</h2>
        <input type="text" placeholder="rgb(0, 0, 0)" v-model="color" />
      </div>
      <div class="article">
        <h2>Enter background color(rgba)</h2>
        <input
          type="text"
          placeholder="rgba(0, 0, 0, 0.2)"
          v-model="backgroundColor"
        />
      </div>
      <div class="submit-button" @click="editRole()">Submit</div>
      <main-masterpage>
        <template v-slot:footer></template>
      </main-masterpage>
    </main>
  </div>
</template>

<script>
import MainMasterpage from "@/masterpage/MainMasterpage.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EditRole",
  components: {
    MainMasterpage,
  },
  data() {
    return {
      id: 0,
      title: null,
      description: null,
      color: null,
      backgroundColor: null,
    };
  },
  computed: {
    ...mapGetters(["getRoleById"]),
    receivedTypeId() {
      return this.$route.params.id;
    },
    receivedRoleId() {
      return this.$route.params.roleid;
    },
  },
  methods: {
    ...mapActions(["editRoleAction"]),
    editRole() {
      this.editRoleAction([
        this.receivedTypeId,
        {
          id: this.id,
          title: this.title,
          description: this.description,
          color: this.color,
          backgroundColor: this.backgroundColor,
        },
      ]);
      this.$router.push({
        name: "roles",
      });
    },
    goToMain() {
      this.$router.push({ path: "/main" });
    },
    goToRoles() {
      this.$router.push({ path: "/roles" });
    },
  },

  mounted() {
    const role = this.getRoleById(this.receivedTypeId, this.receivedRoleId);
    if (role) {
      (this.id = role.id),
        (this.title = role.title),
        (this.description = role.description),
        (this.color = role.color),
        (this.backgroundColor = role.backgroundColor);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/add-edit.scss";
</style>
