<template>
  <div>
    <NavTwo />
    <PageHeader title="about style 2" />
    <ChooseTwo />
    <Trusted />
    <ClientsLogo />
    <ServiceTwo />
    <Skills />  
    <CallToAction />
    <Footer />
  </div>
</template>
<script>
  import NavTwo from "../components/NavTwo";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import Skills from "../components/Skills";
  import ChooseTwo from "../components/ChooseTwo";
  import ServiceTwo from "../components/ServicePageTwo";

  import Steps from "../components/Steps";
  import Trusted from "../components/Trusted";
  import ClientsLogo from "../components/ClientsLogo";
  import Testimonial from "../components/Testimonial";
  import CallToAction from "../components/CallToAction";

  export default {
    components: {
      CallToAction,
      ServiceTwo,
      Testimonial,
      ClientsLogo,
      Trusted,
      Steps,
      ChooseTwo,
      Skills,
      Footer,
      PageHeader,
      NavTwo
    },
    head(){
      return {
        title: "Axioma | OknoERP"
      }
    }

  }
</script>
