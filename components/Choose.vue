<template>
  <section class="choose-area area-padding text-center">
      <div class="choose-fluid">
          <div class="container">
              <div class="row">
                  <div class="col-md-12 primary-padding-2">
                      <div class="avivon-heading">
                          <h2 class="avivon__title second__title">why choose avivon?</h2>
                      </div><!-- end avivon-heading -->
                  </div><!-- end col-md-12 -->
              </div><!-- end row -->
              <div class="row">
                  <div class="col-md-12 choose-box choose-popup-box mb-60px">
                      <div class="choose-popup">
                          <img src="/images/choose-img.png" alt="choose image">
                          <a class="mediabox video-play-btn" href="https://www.youtube.com/watch?v=dFBKl1pYn0w"
                             title="Play Video">
                             <span class="fontello icon-play"></span>
                          </a>
                      </div><!-- end choose-popup -->
                  </div><!-- end col-md-12 -->
              </div><!-- end row -->
              <div class="row choose-content responsive-content">
                  <div class="col-md-4 col-sm-6">
                      <div class="choose-same">
                          <div class="choose__icon">
                              <span class="fontello icon-wallet"></span>
                          </div><!-- end choose__icon -->
                          <div class="choose__title">
                              <nuxt-link to="/our-mission">
                                  <h3>get the best consultancy from
                                      your experts advisor.</h3>
                              </nuxt-link>
                          </div><!-- end choose__title -->
                      </div><!-- end choose-same -->
                  </div><!-- end col-md-4 -->
                  <div class="col-md-4 col-sm-6">
                      <div class="choose-same">
                          <div class="choose__icon">
                              <span class="fontello icon-analysis"></span>
                          </div><!-- end choose__icon -->
                          <div class="choose__title">
                              <nuxt-link to="our-mission">
                                  <h3>get the best consultancy from
                                      your experts advisor.</h3>
                              </nuxt-link>
                          </div><!-- end choose__title -->
                      </div><!-- end choose-same -->
                  </div><!-- end col-md-4 -->
                  <div class="col-md-4 col-sm-6 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-0">
                      <div class="choose-same rpl-content">
                          <div class="choose__icon">
                              <span class="fontello icon-profits"></span>
                          </div><!-- end choose__icon -->
                          <div class="choose__title">
                              <nuxt-link to="/our-mission">
                                  <h3>get the best consultancy from
                                      your experts advisor.</h3>
                              </nuxt-link>
                          </div><!-- end choose__title -->
                      </div><!-- end choose-same -->
                  </div><!-- end col-md-4 -->
              </div><!-- end row -->
          </div><!-- container -->
      </div><!-- end choose-fluid -->
  </section>
</template>

<script>
    export default {
      name: "Choose",
      mounted() {
        MediaBox('.mediabox');
      }

    }
</script>

<style scoped>

</style>
