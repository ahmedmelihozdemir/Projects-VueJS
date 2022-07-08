<template>
  <div class="container">
    <div class="col-xl-12 text-center">
      <button @click="selectedComponent='appBlue'" class="btn btn-primary">Blue</button>
      <button @click="selectedComponent='appRed'" class="btn btn-danger">Red</button>
      <button @click="selectedComponent='appGreen'" class="btn btn-success">Green</button>
      <hr />
      <p>{{selectedComponent}}</p>
      <hr>
      <component :is="selectedComponent">
        <h3>{{selectedComponent}} Theme</h3>
        <p>Contents</p>
      </component>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Red from "./components/Red.vue";
import Green from "./components/Green.vue";

export default {
  components: {
    appBlue: Blue,
    appRed: Red,
    appGreen: Green
  },
  data() {
    return {
      selectedComponent: ""
    }
  }
};
</script>

<style>
div.container {
  margin-top: 10px;
  padding: 10px;
}
div.row {
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 40px;
  margin: 15px;
}
.btn {
  margin: 5px;
}
h3{
  color: rgb(176, 176, 149);
}
p{
  color: rgb(176, 176, 149);
}

</style>
