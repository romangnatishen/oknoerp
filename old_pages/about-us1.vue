<template>
  <div>
    <NavOne />
    <PageHeader title="about style 1" />
    <ThinkAreaThree />
    <FunFact />
    <Team />
    <TestimonialTwo />
    <OfferThree />
    <ClientsLogo />
    <Meet />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import ThinkAreaThree from "../components/ThinkAreaThree";
  import FunFact from "../components/FunFact";
  import Team from "../components/Team";
  import TestimonialTwo from "../components/TestimonialTwo";
  import OfferThree from "../components/OfferThree";
  import ClientsLogo from "../components/ClientsLogo";
  import Meet from "../components/Meet";
  export default {
    components: {
      Meet,
      ClientsLogo,
      OfferThree,
      TestimonialTwo,
      Team,
      FunFact,
      ThinkAreaThree,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "Axioma | OknoERP"
      }
    }

  }
</script>
