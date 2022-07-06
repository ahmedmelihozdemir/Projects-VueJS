<template>
  <div class="col-md-6">
    <h3>Child Component</h3>
    <p>Burası 1. Child Component</p>
    <h5>Adın: {{name}} </h5>
    <p>Tersi Alınacak Ad: {{reverseName()}} </p>
    <button @click="childToParent()" class="btn btn-secondary">Veriyi parents'a gönder.</button>
  </div>
</template>

<script>
export default{
  props: ['name'],
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
