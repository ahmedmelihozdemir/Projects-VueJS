<template>
  <div class="row">
    <div class="card offset-2 col-md-3">
      <div class="card-body tex-center d-flex align-items-center flex-column">
        <img
          height="128"
          class="img-responsive text-center mb-3"
          :src="
            product.selectedImage == null
              ? '/src/assets/default.png'
              : product.selectedImage
          "
        />
        <input
          ref="file"
          type="file"
          style="display: none;"
          @change="onChange($event)"
          class="form-control"
        />
        <button
          class="btn btn-outline-primary btn-block mt-4"
          type="button"
          @click="$refs.file.click()"
        >
          Resim Seç
        </button>
      </div>
    </div>
    <div class="col-md-5 ">
      <div class="col-md-11 card ">
        <div class="card-body">
          <div class="form-group mt-2">
            <label class="ms-1">Product Name</label>
            <input
              type="text"
              v-model="product.title"
              class="form-control mt-2"
              placeholder="Adını giriniz"
            />
          </div>
          <div class="row">
            <div class="form-group col-md-6 mt-2">
              <label class="ms-1">Product Count</label>
              <input
                type="text"
                v-model="product.count"
                class="form-control mt-2"
                placeholder="Adetini giriniz"
              />
            </div>
            <div class="form-group col-md-6 mt-2">
              <label>Product Price</label>
              <input
                type="text"
                v-model="product.price"
                class="form-control mt-2"
                placeholder="Fiyatını giriniz"
              />
            </div>
          </div>
          <button
            @click="addProduct()"
            class="btn btn-outline-primary mt-3 ms-1"
          >
            Ekle
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      product: {
        title: null,
        count: null,
        price: null,
        totalPrice: null,
        selectedImage: null
      }
    };
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0];
      this.product.selectedImage = URL.createObjectURL(file);
    },
    addProduct() {
      this.product.totalPrice = this.product.count * this.product.price;
      eventBus.$emit("productAdded", this.product);
      this.product = {
        title: null,
        count: null,
        price: null,
        totalPrice: null,
        selectedImage: null
      };
    }
  }
};
</script>

<style></style>
