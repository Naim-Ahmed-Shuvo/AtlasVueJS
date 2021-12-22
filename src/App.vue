<template>
  <main>
     <Nav v-if="$route.path!=='/login'"/>
        <router-view/>
         <Modal v-show="showModal"/>
      <Footer v-if="$route.path!=='/login'"/>
     
  </main>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import Modal from "./utils/Modal.vue"
export default{
  components:{
      Nav,
      Footer,
      Modal
  },
  computed:{
     user(){
       const user = JSON.parse(localStorage.getItem("USER"));
        // console.log(user);
       return 
     },
     showModal(){
       return this.$store.state.showModal
     }
  }
}
</script>

<style>
 main h1,h2,h3,h4,h5,h6,a,p,span,pre,button{
   font-family: "Poppins",sans-serif;
 }
</style>

