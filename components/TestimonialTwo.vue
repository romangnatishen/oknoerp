<template>
  <section class="trusted-window blockquote-area avivon-pb text-center">
      <div class="trusted-fluid">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <div class="trusted-content quote-slide avivon-pt">

                        <swiper :options="swiperOptions">
                        <swiper-slide>

                          <div class="ts-item">
                              <div class="trusted__icon mb-50px">
                                  <span class="block__symbol">“</span>
                              </div><!-- end trusted__icon -->
                              <div class="trusted__title">
                                  <h2 class="trusted__title-title">
                                      “this is due to their excellent service, competitive
                                      pricing and customer support.
                                      It’s throughly refresing to get such a personal touch.”
                                  </h2>
                                  <p class="trusted__desc-desc mt-35px"><span>shirley smith </span>/ avivon founder</p>
                              </div><!-- end trusted__title -->
                          </div><!-- end ts-item -->
                        </swiper-slide>
                          <swiper-slide>
                          <div class="ts-item">
                              <div class="trusted__icon mb-50px">
                                  <span class="block__symbol">“</span>
                              </div><!-- end trusted__icon -->
                              <div class="trusted__title">
                                  <h2 class="trusted__title-title">
                                      “there are many variations of passages of lorem ispsum available but the majority
                                      have suffered alteration don't look even slightly believable.”
                                  </h2>
                                  <p class="trusted__desc-desc mt-35px"><span>shirley smith </span>/ avivon founder</p>
                              </div><!-- end trusted__title -->
                          </div><!-- end ts-item -->
                          </swiper-slide>
                          <swiper-slide>
                          <div class="ts-item">
                              <div class="trusted__icon mb-50px">
                                  <span class="block__symbol">“</span>
                              </div><!-- end trusted__icon -->
                              <div class="trusted__title">
                                  <h2 class="trusted__title-title">
                                      “there are many variations of passages of lorem ispsum available but the majority
                                      have suffered alteration don't look even slightly believable.”
                                  </h2>
                                  <p class="trusted__desc-desc mt-35px"><span>shirley smith </span>/ avivon founder</p>
                              </div><!-- end trusted__title -->
                          </div><!-- end ts-item -->
                          </swiper-slide>
                        </swiper>
                      </div><!-- end trusted-content -->
                  </div><!-- end col-md-12 -->
              </div><!-- end row -->
          </div><!-- container -->
      </div><!-- end trusted-fluid -->
  </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

    export default {
      name: "TestimonialTwo",
      components: {
        Swiper,
        SwiperSlide
      },
      directives: {
        swiper: directive
      },
      data() {
        return {
          swiperOptions: {
            slidesPerView : 1,
            loop: false,
            speed: 1000,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },

          }
        }
      }

    }
</script>

<style scoped>

</style>
