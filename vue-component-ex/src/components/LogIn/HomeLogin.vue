<template>
  <div class="container">
    <appHeaderLogin></appHeaderLogin>

    <div class="row">
      <appContentLogin></appContentLogin>
      <appContentLeftLogin></appContentLeftLogin>
      <appContentRightLogin></appContentRightLogin>
    </div>
  </div>
</template>

<script>
import HeaderLogin from "./HeaderLogin.vue";
import ContentLogin from "./ContentLogin.vue";
import ContentRightLogin from "./ContentRightLogin.vue";
import ContentLeftLogin from "./ContentLeftLogin.vue";

export default {
  components: {
    appHeaderLogin: HeaderLogin,
    appContentLogin: ContentLogin,
    appContentRightLogin: ContentRightLogin,
    appContentLeftLogin: ContentLeftLogin
  }
};
</script>

<style></style>
