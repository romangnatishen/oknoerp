<template>
  <div>
    <NavBar />
    <!-- <Slider /> -->
    <AboutUs />
    <CallToAction />
    <Footer />
  </div>
</template>
<script>

import NavBar from "../components/oknoerp/Nav.vue";
import AboutUs from "../components/oknoerp/AboutUs.vue";
  import Slider from "../components/modules/Slider";
  import Footer from "../components/Footer";
  import CallToAction from "../components/CallToAction.vue";
  export default {
    components: {CallToAction, Slider, Footer, NavBar, AboutUs}
  }
</script>
