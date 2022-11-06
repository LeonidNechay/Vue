<template>
  <div>
    <div>
      <slot name="footer">
        <div class="footer">
          <div class="footer-1">
            <div class="page-up">
              <a href="#">
                <div class="footer-button">Нагору</div>
              </a>
            </div>
            <div class="support-us">
              <a href="#" onclick="return AlertIt();">
                <div class="footer-button">Підтримати нас</div>
              </a>
            </div>
            <div class="server-link">
              <a href="#">
                <div class="footer-button">Сервер</div>
              </a>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMasterpage",
};
</script>

<style lang="css" scoped>
/* footer */

.footer {
  display: flex;
  margin-top: 20px;
  border-top: 1px solid rgb(54, 35, 70);
  justify-content: center;
  /* flex: 0 0 100%; */
}
.footer-1 {
  margin-top: 5px;
  flex: 0 0 45%;
  display: flex;
  justify-content: space-between;
}
.footer-button {
  width: auto;
  margin: 4px 5px 8px 5px;
  padding: 12px 20px;
  background-color: rgb(63, 33, 86);
  box-shadow: rgba(63, 33, 86, 0.2) 2.5px 2.5px 0px 0px;
  border-radius: 20px;
  text-align: center;
}
.footer-button:hover {
  transform: scale(1.05);
}
.footer-button:active {
  margin: 6.5px 2.5px 5.5px 7.5px;
  box-shadow: none;
  background-color: rgb(64, 67, 73);
}
</style>
