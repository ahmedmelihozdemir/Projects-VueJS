<template>
  <div class="col-md-6">
    <h3>Child Component</h3>
    <p>Burası 1. Child Component</p>
    <h5>Kullanıcı Adı: {{name}} </h5>
    <p>Tersi Alınacak Ad: {{reverseName()}} </p>
    <h6>Kullanıcı Yaşı: {{age}}</h6>
    <button @click="childToParent()" class="btn btn-secondary">Veriyi parents'a gönder.</button>
  </div>
</template>

<script>
export default{
  props: {
    name: {
      type: String,
      default: "Melih Default"
    },
    age : {
      type: Number,
    }
  },
  methods: {
    reverseName(){
      return this.name.split("").reverse().join("");
    },
    childToParent(){
        this.$emit("data", this.name )
    }
  }
}

</script>

<style scoped>
div {
  background-color: green;
  padding: 20px;
  border: 1px solid ;
  border-radius: 10px;
  display: inline-block;
}
</style>
