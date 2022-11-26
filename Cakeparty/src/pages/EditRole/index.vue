<template>
  <main>
    <div class="flex">
      <div class="article">
        <h2>Edit Role</h2>
        <div class="input-group">
          <input
            type="text"
            id="name"
            name="name"
            maxlength="12"
            required
            class="input"
            v-model="title"
          />
          <label for="name" class="input-label">Title</label>
        </div>
      </div>
      <div class="role-container">
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
      </div>
    </div>
    <div class="article">
      <div class="input-group">
        <input
          type="text"
          id="name"
          name="name"
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
          id="name"
          name="name"
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
          id="name"
          name="name"
          required
          class="input"
          v-model="backgroundColor"
        />
        <label for="name" class="input-label">Background color(rgba)</label>
      </div>
    </div>
    <input type="hidden" v-model="id" />
    <div class="submit-button" @click="editRole()">Submit</div>
    <main-masterpage>
      <template v-slot:footer></template>
    </main-masterpage>
  </main>
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
    titleStyle(color, backgroundColor) {
      return { color: color, backgroundColor: backgroundColor };
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
@import "@/assets/styles/roles";
.role-container {
  flex: 0 0 15%;
}
.flex .article {
  flex: 0 0 82.4%;
}
.flex .article input {
  margin: 30px 0px 26px 10px;
}
h2 {
  margin-bottom: 0px;
}
.role {
  margin-top: 15px;
  margin-bottom: 0px;
  margin-right: 0px;
}
</style>
