<template>
  <div class="container">
    <h1 class="text-center">Add Product Application</h1>
    <hr />
    <app-new-product></app-new-product>
    <br /><br />
    <app-progress></app-progress>
    <br /><br />
    <app-products></app-products>
  </div>
</template>

<script>
import NewProduct from "./components/NewProduct.vue";
import Progress from "./components/Progress.vue";
import Products from "./components/Products.vue";

export default {
  components: {
    appNewProduct: NewProduct,
    appProgress: Progress,
    appProducts: Products
  }
};
</script>

<style>
body {
  background-color: rgba(240, 248, 255, 0.892);
  padding-top: 20px;
  padding-bottom: 20px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #a67a52;
}
h3 {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #a67a52;
}

.card {
  margin-right: 5px;
  margin-bottom: 5px;
}

.card:last-child {
  margin-right: 0px;
}

.col-md-2 {
  max-width: 15.666667% !important;
}

.product-container {
  margin-left: 15px;
}
</style>
