<template>
  <div>
    <NavOne />
    <PageHeader title="Single Cases" />
    <CasesSingle />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import PageHeader from "../components/PageHeader";
  import CasesSingle from "../components/CasesSingle";
  export default {
    components: {
      CasesSingle,
      PageHeader,
      Footer,
      NavOne
    },
    head(){
      return {
        title: "Avivon | Single Cases"
      }
    }

  }
</script>
