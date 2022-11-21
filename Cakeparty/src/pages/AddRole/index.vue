<template>
  <div>
    <main>
      <h1 class="main-h1">Add Role</h1>
      <div class="role">
        <div class="actions">
          <i class="fa-solid fa-pen"></i>
          <i class="fa-solid fa-trash"></i>
        </div>
        <div class="role-text">
          <strong :style="titleStyle(color, backgroundColor)">{{
            this.title
          }}</strong>
        </div>
        <div class="role-text">
          {{ this.description }}
        </div>
      </div>
      <div class="article">
        <div class="input-group">
          <input
            type="number"
            id="id"
            name="id"
            min="0"
            required
            class="input"
            v-model="id"
          />
          <label for="name" class="input-label">Id</label>
        </div>
      </div>
      <div class="article">
        <div class="input-group">
          <input
            type="text"
            id="title"
            name="title"
            maxlength="12"
            required
            class="input"
            v-model="title"
          />
          <label for="name" class="input-label">Title</label>
        </div>
      </div>
      <div class="article">
        <div class="input-group">
          <input
            type="text"
            id="description"
            name="description"
            maxlength="50"
            required
            class="input"
            v-model="description"
          />
          <label for="name" class="input-label">Description</label>
        </div>
      </div>
      <div class="article">
        <div class="input-group">
          <input
            type="text"
            id="color"
            name="color"
            required
            class="input"
            v-model="color"
          />
          <label for="name" class="input-label">Color(rgb)</label>
        </div>
      </div>
      <div class="article">
        <div class="input-group">
          <input
            type="text"
            id="backgroundColor"
            name="backgroundColor"
            required
            class="input"
            v-model="backgroundColor"
          />
          <label for="name" class="input-label">Background color(rgba)</label>
        </div>
      </div>
      <div class="submit-button" @click="addRole()">Submit</div>
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
  name: "AddRole",
  components: {
    MainMasterpage,
  },
  data() {
    return {
      id: null,
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
    isEditMode() {
      return this.receivedTypeId, this, this.receivedRoleId;
    },
  },
  methods: {
    ...mapActions(["addNewRoleAction"]),
    addRole() {
      this.addNewRoleAction([
        this.receivedTypeId,
        {
          id: this.id,
          title: this.title,
          description: this.description,
          color: this.color,
          backgroundColor: this.backgroundColor,
        },
      ]),
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
    titleStyle(color, backgroundColor) {
      return { color: color, backgroundColor: backgroundColor };
    },
  },

  mounted() {
    if (this.isEditMode) {
      const role = this.getRoleById(this.receivedTypeId, this.receivedRoleId);
      if (role) {
        (this.id = role.id),
          (this.title = role.title),
          (this.description = role.description),
          (this.color = role.color),
          (this.backgroundColor = role.backgroundColor);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/add-edit.scss";
@import "@/assets/styles/roles";
</style>
