<template>
  <div>
    <NavOne />
    <PageHeader title="our history" />
    <ChooseAreaTwo />
    <TimeLine />
    <ClientsLogo />
    <MeetTwo />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import ChooseAreaTwo from "../components/ChooseAreaTwo";
  import TimeLine from "../components/TimeLine";
  import ClientsLogo from "../components/ClientsLogo";
  import MeetTwo from "../components/MeetTwo";
  export default {
    components: {
      MeetTwo,
      ClientsLogo,
      TimeLine,
      ChooseAreaTwo,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "Avivon | our history"
      }
    }

  }
</script>
