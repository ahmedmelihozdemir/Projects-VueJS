<template>
  <div class="col-md-6">
    <h3>Child Component</h3>
    <p>Burası 2. Child Component</p>
    <h5>Değişecek Ad: {{name2}}</h5>
    <p>Ayrılacak Ad: {{splitName2()}}</p>
    <button @click="secondChildToParent()" class="btn btn-secondary">Parents'a veri gönder</button>
  </div>
</template>

<script>
export default{
  props: ['name2'],
  methods :  {
    secondChildToParent(){
      this.$emit("veri", this.name2)
    },
    splitName2(){
      return this.name2 = this.name2.split("")
    }
  }

}

</script>

<style scoped>
div {
  background-color: yellow;
  padding: 20px;
  border: 1px solid ;
  border-radius: 10px;
  display: inline-block;
}
</style>
