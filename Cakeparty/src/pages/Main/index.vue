<template>
  <main>
    <h1>Головна</h1>
    <div class="article">
      <div class="main-hello">
        <h3>Вітаю тебе дорогий друже!</h3>
        Ти потрапив до сайту сервера Cakeparty.<br />
        Давай для початку я тобі розповім кілька слів про наш сервер. Ти ж не
        проти?<br />
        Якщо ти тут все ще тут, то я можу продовжити.
      </div>
    </div>
    <div class="article">
      <div class="main-text">
        На сервері ти можеш побачити дуже багато текстових та голосових каналів.
        У каждого есть свое предназначение. Тож будь уважний і не губися.<br />
        Тут ти можеш познайомитися і знайти нових друзів, а так само раптом
        знайдеш свою другу половинку.<br />
        Також ти можеш приєднатися до спільного перегляду різного роду: аніме,
        фільмів, серіалів та мультфільмів. Усі анонси ти зможеш побачити
        в<strong class="chat">#🎉івенти</strong>.
      </div>
    </div>
    <div class="article">
      <div class="main-text">
        Разом з цим, якщо ти проявлятимеш велику активність у спілкуванні з
        людьми в голосом або в текстових чатах тобі нараховуватиметься рівень,
        завдяки якому ти можеш стати топ один на сервері та отримати особливий
        подарунок у вигляді ролі.<br />
        Тільки будь акуратний і не забувай про правила сервера, які краще не
        порушувати, а то Модератори та Адміністратори покарають, якщо їх не
        дотримуватимуться. До того ж, ти можеш брати участь у спільному
        проведення часу у різні ігри і легко знайти собі тимейту до душі.
      </div>
    </div>
    <div class="article">
      <div class="main-text">
        Щодо сайту, ти завжди можеш тут ознайомитися більше розширеною
        інформацією про сервер, такий як: яким чином отримати ту чи іншу роль,
        що дають ролі, а також багато про що інше.<br />
        Дорогий друже, сподіваюся тобі сподобалася і була корисна ця
        інформація!<br />
        Гарного тобі часу з нами!
      </div>
    </div>
    <main-masterpage>
      <template v-slot:footer></template>
    </main-masterpage>
  </main>
</template>

<script>
import MainMasterpage from "@/masterpage/MainMasterpage.vue";

export default {
  name: "MainPage",
  components: {
    MainMasterpage,
  },
  methods: {
    goToRoles() {
      this.$router.push({ path: "/roles" });
    },
    goToRules() {
      this.$router.push({ path: "/rules" });
    },
  },
};
</script>

<style lang="scss">
// @import '@/assets/styles/article.scss';

.main-hello {
  padding-top: 15px;
  padding-bottom: 15px;
  line-height: 24px;
}
.main-hello h3 {
  margin: 0px;
  margin-bottom: 3px;
}
.main-text {
  padding-top: 15px;
  padding-bottom: 15px;
  line-height: 24px;
}
</style>
