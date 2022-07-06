<template>
  <div class="container">
    <h1>Parent Component</h1>
    <p>Burası parent component</p>
    <button @click="changeName" class="btn btn-primary">1. Child'in adını değiştir.</button>
    <button @click="changeName2" class="btn btn-success">2. Child'in adını değiştir.</button>
    <hr />
    <h6>1. Child Component üzerinden gelen veri: {{childData}} </h6>
    <h6>2. Child Component üzerinden gelen veri: {{secondChildData}}</h6>
    <hr>
    <div class="row">
      <appUserDetails :age="age" @data="childData= $event" :name="title"></appUserDetails>
      <appUserEdit @editedAge="age=$event" @veri="secondChildData= $event" :name2="name2" :age="age"></appUserEdit>
      
    </div>
  </div>
</template>

<script>
import UserDetails from "./UserDetails.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    appUserDetails: UserDetails,
    appUserEdit: UserEdit
  },
  data:function(){
    return{
      title: "Melih",
      name2: "Ahmet",
      childData: "",
      secondChildData: "",
      age:25,

    }
  },
  methods: {
    changeName(){
      this.title = "Hakan";
    },
    changeName2(){
      this.name2 = "Mehmet";
    }
  }
};
</script>

<style>
div.container {
  margin-top: 30px;
  padding: 0 20px 40px;
  background-color: cornflowerblue;
  border: 1px solid ;
  border-radius: 10px;
}
div.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
</style>
