<template>
  <div>
    <NavTwo />
    <Slider />
    <ServicesList />
    <Footer />
  </div>
</template>
<script>
  import NavTwo from "../components/NavTwo";
  import Slider from "../components/modules/Slider";
  import Footer from "../components/Footer";
  import ServicesList from "../components/ServicesList";
  export default {
    components: {
      ServicesList,
      Footer,
      Slider,
      NavTwo
    },
    head(){
      return {
        title: "Axioma | Rozwiązania branżowe"
      }
    }

  }
</script>
