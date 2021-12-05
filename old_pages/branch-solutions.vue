<template>
  <div>
    <NavTwo />
    <Slider />
    <BranchSolutionsList />
    <Footer />
  </div>
</template>
<script>
  import NavTwo from "../components/NavTwo";
  import Slider from "../components/modules/Slider";
  import Footer from "../components/Footer";
  import BranchSolutionsList from "../components/BranchSolutionsList";
  export default {
    components: {
      BranchSolutionsList,
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
