<template>
  <div>
    <NavOne />
    <PageHeader title="cases style 2" />
    <CasesPageTwo />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import CasesPageTwo from "../components/CasesPageTwo";
  export default {
    components: {
      CasesPageTwo,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "Avivon | Cases 2"
      }
    }

  }
</script>
