<template>
  <div class="body">
    <header>
      <div class="server_logo">
        <a :onclick="invalidLink"
          ><img src="./assets/Avatar_Korra.gif" alt="server_gif"
        /></a>
        <div class="header-text">
          <b class="header-pink">Cake</b><b>party</b>
        </div>
      </div>
      <div class="menu">
        <div class="menu-content">
          <router-link class="menu-item" to="/"><b>Головна</b></router-link>
          <router-link class="menu-item" to="/rules"
            ><b>Правила</b></router-link
          >
          <router-link class="menu-item" to="/roles"><b>Ролі</b></router-link>
          <div class="menu-item">
            <b>Корисні силки</b>
            <div class="menu-item-content">
              <ul>
                <li>
                  <a :onclick="invalidLink">
                    <b>Силка на сервер</b>
                  </a>
                </li>
                <li>
                  <a :onclick="invalidLink"><b>Підтримати нас</b></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
  methods: {
    invalidLink() {
      alert("This link is invalid");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/article.scss";

@import "@/assets/styles/header";

body {
  margin: 0px;
  background-color: black;
}

.body {
  background-color: rgb(43, 13, 66);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: rgb(237, 237, 237);
  font-family: Trebuchet MS, sans-serif;
}

a {
  text-decoration: none;
  color: rgb(237, 237, 237);
  cursor: pointer;
}

main {
  flex: 0 0 60%;
  padding: 5px 10px;
  z-index: 9;
}
</style>
