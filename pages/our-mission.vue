<template>
  <div>
    <NavOne />
    <PageHeader title="our mission" />
    <ChooseThree />
    <OfferFour />
    <Cases />
    <ClientsLogo />
    <MeetTwo />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import ChooseThree from "../components/ChooseThree";
  import OfferFour from "../components/OfferFour";
  import Cases from "../components/Cases";
  import ClientsLogo from "../components/ClientsLogo";
  import MeetTwo from "../components/MeetTwo";
  export default {
    components: {
      MeetTwo,
      ClientsLogo,
      Cases,
      OfferFour,
      ChooseThree,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "Avivon | our mission"
      }
    }

  }
</script>
