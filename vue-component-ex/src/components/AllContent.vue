<template>
  <div class="container">
    <div class="row">
      <appContent></appContent>
      <appContentSide></appContentSide>
      <hr>
      <button class="btn btn-primary btn-lg m-3" @click="selectedComponent = 'appHomeLogin'">Log In Component</button>
      <hr>
      <p>{{selectedComponent}}</p>

      <component :is="selectedComponent">
        
      </component>
    </div>
  </div>
</template>

<script>
import Content from "./Content.vue";
import ContentSide from "./ContentSide.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import HomeLogin from "./LogIn/HomeLogin.vue";

export default {
  components: {
    appContent: Content,
    appContentSide: ContentSide,
    appHeader: Header,
    appFooter: Footer,
    appHomeLogin: HomeLogin
  },
  data: function() {
    return {
      selectedComponent: "appAllContent"
    }
  },
}
</script>

<style>
body {
  background-color: #f0f2f5;
}
div.container {
  margin-top: 60px;
  padding: 0 20px 40px;
  background-color: #f0f2f5;
  border-radius: 10px;
}
div.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
  margin: 5px;
}
</style>
