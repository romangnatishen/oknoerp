<template>
  <div>
    <NavOne />
    <PageHeader title="blog detail" />
    <BlogSingle />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import PageHeader from "../components/PageHeader";
  import BlogSingle from "../components/BlogSingle";
  export default {
    components: {
      BlogSingle,
      PageHeader,
      Footer,
      NavOne
    },
    head(){
      return {
        title: "Avivon | Blog Detail"
      }
    }

  }
</script>
