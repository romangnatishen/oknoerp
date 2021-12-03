<template>
  <section class="ofc-caoursel-area recent-area area-padding theme-bg-gray">
      <div class="ofc-caoursel-fluid">
          <div class="container">
              <div class="row">
                  <div class="col-md-12 primary-padding-3 text-center">
                      <div class="avivon-heading">
                          <h2 class="avivon__title">Nasze usługi</h2>
                      </div><!-- end avivon-heading -->
                  </div><!-- end col-md-12 -->
              </div><!-- end row -->
              <div class="row">
                  <div class="col-md-12">
                      <div class="office-list">

                        <swiper :options="swiperOptions">
                          <swiper-slide>
                          <div class="office-list-item">
                              <div class="office__name">
                                  <h3 class="office__name-title">
                                      <a href="/single-cases">
                                          Wdrożenie systemów klasy ERP
                                      </a>
                                  </h3>
                                  <span class="fontello icon-exploration"></span>
                              </div><!-- end office__name -->
                              <div class="recent__img recent__bg"></div>
                              <div class="recent__btn">
                                  <a href="/single-cases" class="recent__btn-btn">
                                      read more
                                      <span class="fontello icon-angle-double-right"></span>
                                  </a>
                              </div>
                          </div><!-- end office-list-item -->
                          </swiper-slide>
                          <swiper-slide>
                          <div class="office-list-item">
                              <div class="office__name">
                                  <h3 class="office__name-title">
                                      <a href="/single-cases">
                                          Rozwiązania branżowe
                                      </a>
                                  </h3>
                                  <span class="fontello icon-achievement"></span>
                              </div><!-- end office__name -->
                              <div class="recent__img recent__bg-2"></div>
                              <div class="recent__btn">
                                  <a href="/single-cases" class="recent__btn-btn">
                                      read more
                                      <span class="fontello icon-angle-double-right"></span>
                                  </a>
                              </div>
                          </div><!-- end office-list-item -->
                          </swiper-slide>
                          <swiper-slide>
                          <div class="office-list-item">
                              <div class="office__name">
                                  <h3 class="office__name-title">
                                      <a href="/single-cases">
                                          Integracja ze sprzętem
                                      </a>
                                  </h3>
                                  <span class="fontello icon-megaphone"></span>
                              </div><!-- end office__name -->
                              <div class="recent__img recent__bg-3"></div>
                              <div class="recent__btn">
                                  <a href="/single-cases" class="recent__btn-btn">
                                      read more
                                      <span class="fontello icon-angle-double-right"></span>
                                  </a>
                              </div>
                          </div><!-- end office-list-item -->
                          </swiper-slide>
                          <swiper-slide>
                          <div class="office-list-item">
                              <div class="office__name">
                                  <h3 class="office__name-title">
                                      <a href="/single-cases">
                                          Wsparcie 24/7
                                      </a>
                                  </h3>
                                  <span class="fontello icon-knowledge"></span>
                              </div><!-- end office__name -->
                              <div class="recent__img recent__bg-4"></div>
                              <div class="recent__btn">
                                  <a href="/single-cases" class="recent__btn-btn">
                                      read more
                                      <span class="fontello icon-angle-double-right"></span>
                                  </a>
                              </div>
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
      name: "CasesCarousel",
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
            slidesPerView : 4,
            loop: true,
            speed: 1000,
            spaceBetween : 30,
            autoplay: {
                delay: 10000,
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
                  slidesPerView : 4
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
