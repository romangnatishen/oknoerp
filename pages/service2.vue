<template>
  <div>
    <NavOne />
    <PageHeader title="service style 2" />
    <ServicePageTwo />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import ServicePageTwo from "../components/ServicePageTwo";
  export default {
    components: {
      ServicePageTwo,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "Avivon | Services 2"
      }
    }

  }
</script>
