<template>
  <section class="client-logo-area text-center">
    <div class="client-logo-fluid">
      <div class="container">
        
        <div class="row client-logo-box theme-btb avivon-pb pt-60px pb-60px">
        
          <div class="col-md-12">
            <div class="client-logo">
              <swiper :options="swiperOptions">
                <swiper-slide>
                  <div class="client-logo-item-opacity1">
                    <img
                      class="client__logo-brand"
                      src="/images/e-logo1.png"
                      alt="client brand logo"
                    />
                  </div>
                  <!-- end client-logo-item -->
                </swiper-slide>
                <swiper-slide>
                  <div class="client-logo-item-opacity1">
                    <img
                      class="client__logo-brand"
                      src="/images/e-logo2.png"
                      alt="client brand logo"
                    />
                  </div>
                  <!-- end client-logo-item -->
                </swiper-slide>
                <swiper-slide>
                  <div class="client-logo-item-opacity1">
                    <img
                      class="client__logo-brand"
                      src="/images/e-logo3.png"
                      alt="client brand logo"
                    />
                  </div>
                  <!-- end client-logo-item -->
                </swiper-slide>
                <swiper-slide>
                  <div class="client-logo-item-opacity1">
                    <img
                      class="client__logo-brand"
                      src="/images/e-logo4.png"
                      alt="client brand logo"
                    />
                  </div>
                  <!-- end client-logo-item -->
                </swiper-slide>
                <swiper-slide>
                  <div class="client-logo-item-opacity1">
                    <img
                      class="client__logo-brand"
                      src="/images/e-logo5.png"
                      alt="client brand logo"
                    />
                  </div>
                  <!-- end client-logo-item -->
                </swiper-slide>
                <swiper-slide>
                  <div class="client-logo-item-opacity1">
                    <img
                      class="client__logo-brand"
                      src="/images/e-logo6.png"
                      alt="client brand logo"
                    />
                  </div>
                  <!-- end client-logo-item -->
                </swiper-slide>
                <swiper-slide>
                  <div class="client-logo-item-opacity1">
                    <img
                      class="client__logo-brand"
                      src="/images/e-logo7.png"
                      alt="client brand logo"
                    />
                  </div>
                  <!-- end client-logo-item -->
                </swiper-slide>
                <swiper-slide>
                  <div class="client-logo-item-opacity1">
                    <img
                      class="client__logo-brand"
                      src="/images/e-logo8.png"
                      alt="client brand logo"
                    />
                  </div>
                  <!-- end client-logo-item -->
                </swiper-slide>
                <swiper-slide>
                  <div class="client-logo-item-opacity1">
                    <img
                      class="client__logo-brand"
                      src="/images/e-logo9.png"
                      alt="client brand logo"
                    />
                  </div>
                  <!-- end client-logo-item -->
                </swiper-slide>
                <swiper-slide>
                  <div class="client-logo-item-opacity1">
                    <img
                      class="client__logo-brand"
                      src="/images/e-logo10.png"
                      alt="client brand logo"
                    />
                  </div>
                  <!-- end client-logo-item -->
                </swiper-slide>
              </swiper>
            </div>
            <!-- end client-logo -->
          </div>
          <!-- end col-md-12 -->
        </div>
        <!-- end row -->
      </div>
      <!-- container -->
    </div>
    <!-- end client-logo-fluid -->
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "ClientsLogo",
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
        slidesPerView: 5,
        loop: true,
        speed: 3000,
        spaceBetween: 30,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
          1024: {
            slidesPerView: 5
          },
          768: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }
      }
    };
  }
};
</script>

<style scoped></style>
