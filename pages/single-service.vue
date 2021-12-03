<template>
  <div>
    <NavOne />
    <PageHeader title="Single Service" />
    <ServiceSingle />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import PageHeader from "../components/PageHeader";
  import ServiceSingle from "../components/ServiceSingle";
  export default {
    components: {
      ServiceSingle,
      PageHeader,
      Footer,
      NavOne
    },
    head(){
      return {
        title: "Avivon | Single Service"
      }
    }

  }
</script>
