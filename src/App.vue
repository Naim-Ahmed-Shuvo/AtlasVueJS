<template>
  <main>
     <Nav/>
        <router-view/>
      <Footer/>
  </main>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default{
  components:{
    Nav,
    Footer,
}
}
</script>

<style>
 main h1,h2,h3,h4,h5,h6,a,p,span,pre,button{
   font-family: "Poppins",sans-serif;
 }
</style>

