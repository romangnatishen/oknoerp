<template>
  <section class="ofc-caoursel-area res-testi-area teatimonial-area area-padding">
      <div class="ofc-caoursel-fluid">
          <div class="container-fluid no-padding-lr">
              <div class="row">
                  <div class="col-md-12 primary-padding-3 text-center">
                      <div class="avivon-heading">
                          <h2 class="avivon__title">testimonials</h2>
                      </div><!-- end avivon-heading -->
                  </div><!-- end col-md-12 -->
              </div><!-- end row -->
              <div class="row">
                  <div class="col-md-12">
                      <div class="testimonial-list">
                        <swiper :options="swiperOptions">
                          <swiper-slide>
                          <div class="office-list-item">
                              <div class="office__desc">
                                  <p class="office__desc-desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, iste soluta, odit sapiente volup.
                                  </p>
                              </div><!-- end office__desc -->
                              <div class="office__name">
                                  <div class="testi__img-img testi__bg-1"></div>
                                  <h3 class="office__name-title">bernice pease</h3>
                                  <span class="office__name-span">manager</span>
                              </div><!-- end office__name -->
                          </div><!-- end office-list-item -->
                          </swiper-slide>
                          <swiper-slide>
                          <div class="office-list-item">
                              <div class="office__desc">
                                  <p class="office__desc-desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aut, commodi architecto delectus!
                                  </p>
                              </div><!-- end office__desc -->
                              <div class="office__name">
                                  <div class="testi__img-img testi__bg-2"></div>
                                  <h3 class="office__name-title">mike hardson</h3>
                                  <span class="office__name-span">director</span>
                              </div><!-- end office__name -->
                          </div><!-- end office-list-item -->
                          </swiper-slide>
                          <swiper-slide>
                          <div class="office-list-item">
                              <div class="office__desc">
                                  <p class="office__desc-desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dolore modi rem omnis esse suscipit.
                                  </p>
                              </div><!-- end office__desc -->
                              <div class="office__name">
                                  <div class="testi__img-img testi__bg-3"></div>
                                  <h3 class="office__name-title">jessica brown</h3>
                                  <span class="office__name-span">founder</span>
                              </div><!-- end office__name -->
                          </div><!-- end office-list-item -->
                          </swiper-slide>
                          <swiper-slide>
                          <div class="office-list-item">
                              <div class="office__desc">
                                  <p class="office__desc-desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quia, iste? Alias consequuntur repellendus.
                                  </p>
                              </div><!-- end office__desc -->
                              <div class="office__name">
                                  <div class="testi__img-img testi__bg-4"></div>
                                  <h3 class="office__name-title">kevin martin</h3>
                                  <span class="office__name-span">marketing</span>
                              </div><!-- end office__name -->
                          </div><!-- end office-list-item -->
                          </swiper-slide>
                          <swiper-slide>
                          <div class="office-list-item">
                              <div class="office__desc">
                                  <p class="office__desc-desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat itaque voluptate ullam ad quidem minima.
                                  </p>
                              </div><!-- end office__desc -->
                              <div class="office__name">
                                  <div class="testi__img-img testi__bg-4"></div>
                                  <h3 class="office__name-title">daniel ward</h3>
                                  <span class="office__name-span">officer</span>
                              </div><!-- end office__name -->
                          </div><!-- end office-list-item -->
                          </swiper-slide>
                          <swiper-slide>
                          <div class="office-list-item">
                              <div class="office__desc">
                                  <p class="office__desc-desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptas rem cupiditate, quae, et ad!
                                  </p>
                              </div><!-- end office__desc -->
                              <div class="office__name">
                                  <div class="testi__img-img testi__bg-1"></div>
                                  <h3 class="office__name-title">bernice pease</h3>
                                  <span class="office__name-span">manager</span>
                              </div><!-- end office__name -->
                          </div><!-- end office-list-item -->
                          </swiper-slide>
                          <swiper-slide>
                          <div class="office-list-item">
                              <div class="office__desc">
                                  <p class="office__desc-desc">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad maxime accusantium voluptatum?
                                  </p>
                              </div><!-- end office__desc -->
                              <div class="office__name">
                                  <div class="testi__img-img testi__bg-2"></div>
                                  <h3 class="office__name-title">mike hardson</h3>
                                  <span class="office__name-span">director</span>
                              </div><!-- end office__name -->
                          </div><!-- end office-list-item -->
                          </swiper-slide>
                        </swiper>
                        <div class="swiper-pagination owl-dots" slot="pagination"></div>
                      </div><!-- end office-list -->
                  </div><!-- end col-md-12 -->
              </div><!-- end row -->
          </div><!-- container -->
      </div><!-- end ofc-caoursel-fluid -->
  </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

    export default {
      name: "Testimonial",
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
            slidesPerView : 5,
            loop: true,
            speed: 1000,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            },
            // Responsive breakpoints
            breakpoints: {
              1024:{
                  slidesPerView : 5
              },
              768:{
                  slidesPerView : 3
              },
              640:{
                  slidesPerView : 2
              },
              320:{
                  slidesPerView : 1
              }
            }
          }
        }
      },
    }
</script>

<style scoped>

</style>
