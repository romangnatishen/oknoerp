<template>
  <section class="trusted-area breadcrumb-area text-center">
      <div class="trusted-fluid">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <div class="trusted-content">
                          <div class="trusted__title">
                              <ul class="bread__rumb-item">
                                  <li class="active-item"><nuxt-link to="/">home</nuxt-link></li>
                                  <li>{{ title }}</li>
                              </ul>
                              <h2 class="trusted__title-title">{{ title }}</h2>
                          </div><!-- end trusted__title -->
                      </div><!-- end trusted-content -->
                  </div><!-- end col-md-12 -->
              </div><!-- end row -->
          </div><!-- container -->
      </div><!-- end trusted-fluid -->
  </section>
</template>

<script>
    export default {
      name: "PageHeader",
      props: {
        title: {
          type: String
        }
      }

    }
</script>

<style scoped>

</style>
