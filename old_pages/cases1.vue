<template>
  <div>
    <NavOne />
    <PageHeader title="cases style 1" />
    <CasesPage />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import CasesPage from "../components/CasesPage";
  export default {
    components: {
      CasesPage,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "Avivon | Cases 1"
      }
    }

  }
</script>
