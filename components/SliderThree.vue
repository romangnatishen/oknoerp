<template>
  <!-- Site Slider Start -->
  <section class="slider-one">
    <div class="slider-one__carousel">
      <swiper :options="swiperOptions">
      <swiper-slide>
      <div class="item slider-one__slider-1" style="background-image: url(/images/home3-slidebg-1.jpg);">
        <div class="container slider__content mt-110px" style="text-align: center">
          <div class="slider-one__title tp-caption tp-resizeme">finance &<br> consulting business</div>
          <p class="slider-one__text">sed quia lipsum dolor sit atur adipiscing elit is nunc <br> quis tellus sed ligula porta ultricies.</p>
          <a href="#" class="get-btn" style=""><span>get started</span></a>
          <!-- /.slider-one__text -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->
      </swiper-slide>
      </swiper>
    </div>
  </section>
    <!-- /.slider-one__carousel -->
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

    export default {
        name: "SliderThree",
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
      },

    }
</script>

<style scoped>

</style>
