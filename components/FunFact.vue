<template>
  <section v-observe-visibility="onVisibilityChange" class="funfact-area responsive-content parallax-area area-padding text-center">
      <div class="funfact-fluid">
          <div class="container">
              <div class="row">
                  <div class="col-md-12 primary-padding-2">
                      <div class="avivon-heading">
                          <h2 class="avivon__title seven__title">numbers speak</h2>
                      </div><!-- end avivon-heading -->
                  </div><!-- end col-md-12 -->
              </div><!-- end row -->
              <div class="row">
                  <div class="col-md-4 col-sm-6 col-xs-12  fact-border fun-countdown">
                      <div class="funfact-shared ">
                          <div class="fun__icon">
                              <span class="fontello icon-wallet"></span>
                          </div><!-- end team__img-->
                          <div class="fun__fact">
                              <span class="counter">
                                <countTo :startVal='0' :endVal='startCounter ? 870 : 0' :duration='3000'></countTo>
                              </span>
                          </div><!-- end fun__fact -->
                          <div class="fun__desc">
                              <span class="team__title-span">businesses chooses</span><br>
                              <span class="team__title-span">avivon agency</span>
                          </div><!-- end fun__desc -->
                      </div><!-- end funfact-shared -->
                  </div><!-- end col-md-4 -->
                  <div class="col-md-4 col-sm-6 col-xs-12  fact-border fun-countdown">
                      <div class="funfact-shared">
                          <div class="fun__icon">
                              <span class="fontello icon-jigsaw"></span>
                          </div><!-- end team__img-->
                          <div class="fun__fact">
                              <span class="counter">
                                <countTo :startVal='0' :endVal='startCounter ? 970 : 0' :duration='3000'></countTo>
                              </span>
                          </div><!-- end fun__fact -->
                          <div class="fun__desc">
                              <span class="team__title-span">projects are</span><br>
                              <span class="team__title-span">completed by avivon</span>
                          </div><!-- end fun__desc -->
                      </div><!-- end funfact-shared -->
                  </div><!-- end col-md-4 -->
                  <div class="col-md-4 col-sm-6 col-xs-12 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-0 fun-countdown">
                      <div class="funfact-shared rpl-content">
                          <div class="fun__icon">
                              <span class="fontello icon-moneyhand"></span>
                          </div><!-- end team__img-->
                          <div class="fun__fact">
                              <span class="counter">
                                <countTo :startVal='0' :endVal='startCounter ? 420 : 0' :duration='3000'></countTo>
                              </span>
                          </div><!-- end fun__fact -->
                          <div class="fun__desc">
                              <span class="team__title-span">customers are satisfied</span><br>
                              <span class="team__title-span">with our services</span>
                          </div><!-- end fun__desc -->
                      </div><!-- end funfact-shared -->
                  </div><!-- end col-md-4 -->
              </div><!-- end row -->
          </div><!-- container -->
      </div><!-- end funfact-fluid -->
  </section>
</template>

<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'

    export default {
      name: "FunFact",
      components: { countTo },
      directives: {
        ObserveVisibility
      },
      data() {
        return{
          startCounter: false
        }
      },
      methods: {
        onVisibilityChange (isVisible) {
          if (isVisible){
            this.startCounter = true;
          }

        },
      },

    }
</script>

<style scoped>

</style>
