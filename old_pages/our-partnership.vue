<template>
  <div>
    <NavOne />
    <PageHeader title="partnership" />
    <Partnership />
    <Meet />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import Partnership from "../components/Partnership";
  import Meet from "../components/Meet";
  export default {
    components: {
      Meet,
      Partnership,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "Avivon | Partnership"
      }
    }

  }
</script>
