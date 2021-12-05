<template>
  <div>
    <NavOne />
    <PageHeader title="blog posts" />
    <BlogPosts />
    <Footer />
  </div>
</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import BlogPosts from "../components/BlogPosts";
  export default {
    components: {
      BlogPosts,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "Avivon | blog posts"
      }
    }

  }
</script>
