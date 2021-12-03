<template>
  <div>
    <NavBar />
    <Slider />
    <Contact />
    <Footer />
  </div>
</template>
<script>
import NavBar from "../components/oknoerp/Nav.vue";
  import Slider from "../components/modules/Slider";
  import Footer from "../components/Footer";
  import Contact from "../components/Contact";
  export default {
    components: {Contact, Slider, Footer, NavBar}
  }
</script>
