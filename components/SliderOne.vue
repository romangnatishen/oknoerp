<template>
  <!-- Site Slider Start -->
  <section class="slider-one">
    <div class="slider-one__carousel">
      <swiper :options="swiperOptions">
      <swiper-slide>
      <div class="item slider-one__slider-1" style="background-image: url(/images/slider_bg1.jpg);">
        <div class="container slider__content">
          <p class="slider-one__text">we make difference</p>
          <div class="slider-one__title tp-caption tp-resizeme">consulting<br> agency for<br> every<br> business</div>
          <a href="#" class="get-btn" style=""><span>get started</span></a>
          <!-- /.slider-one__text -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->
      </swiper-slide>

      <swiper-slide>
        <div class="item slider-one__slider-1" style="background-image: url(/images/slider_bg2.jpg);">
          <div class="container slider__content">
            <p class="slider-one__text">we make difference</p>
            <div class="slider-one__title tp-caption tp-resizeme">consulting<br> agency for<br> every<br> business</div>
            <a href="#" class="get-btn" style=""><span>get started</span></a>
            <!-- /.slider-one__text -->
          </div>
          <!-- /.container -->
        </div>
      <!-- /.item -->
      </swiper-slide>
        <div class="swiper-button-prev" style="color: #ff7e00" slot="button-prev"></div>
        <div class="swiper-button-next" style="color: #ff7e00" slot="button-next"></div>
      </swiper>
    </div>
  </section>
    <!-- /.slider-one__carousel -->
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

    export default {
        name: "SliderOne",
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
            loop: true,
            speed: 1000,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }

          }
        }
      },

    }
</script>

<style scoped>

</style>
