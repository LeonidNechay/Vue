<template>
  <div>
    <header>
      <div class="menu">
        <h1>header</h1>
        <router-link class="menu-item" to="/"><b>Головна</b></router-link>
        <router-link class="menu-item" to="/add"><b>Add</b></router-link>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
