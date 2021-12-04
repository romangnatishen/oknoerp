<template>
  <div>
    <Nav />
    <PageHeader title="ERP w pełni dostosowany do branży stolarki okiennej" />
    <OurBenefits />
    <Trusted />
    <!-- <ClientsLogo /> -->

    <OurModules />
    <Skills />  
    <CallToAction />
    <Footer />
  </div>
</template>
<script>
 
 import Nav from "../components/oknoerp/Nav";
  import PageHeader from "../components/oknoerp/PageHeader";
  import Footer from "../components/Footer";
  import Skills from "../components/oknoerp/Skills";
  import OurModules from "../components/oknoerp/Modules";

  import Steps from "../components/Steps";
  import Trusted from "../components/oknoerp/Trusted";
  import ClientsLogo from "../components/oknoerp/ClientsLogo";
  import Testimonial from "../components/Testimonial";
  import CallToAction from "../components/CallToAction";

import OurBenefits from '../components/oknoerp/OurBenefits.vue';

  export default {
    components: {
      CallToAction,
      OurModules,
      Testimonial,
      ClientsLogo,
      Trusted,
      Steps,
      Skills,
      Footer,
      PageHeader,
      OurBenefits,
      Nav
    },
    head(){
      return {
        title: "Axioma | OknoERP"
      }
    }

  }
</script>
