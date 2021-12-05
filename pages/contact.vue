<template>
  <div>
    <NavBar />
    <!-- <Slider /> -->
    <AboutUs />
    <Contact />
    <Footer />
  </div>
</template>
<script>

import NavBar from "../components/oknoerp/Nav.vue";
import AboutUs from "../components/oknoerp/AboutUs.vue";
  import Slider from "../components/modules/Slider";
  import Footer from "../components/Footer";
  import Contact from "../components/Contact";
  export default {
    components: {Contact, Slider, Footer, NavBar, AboutUs}
  }
</script>
