  <template>

  <section class="ofc-caoursel-area res-testi-area teatimonial-area">
      <div class="ofc-caoursel-fluid">
          <div class="container-fluid no-padding-lr">
              <div class="row">
                  <div class="col-md-12">
                      <div class="testimonial-list">
                        <swiper :options="swiperOptions">
                          <swiper-slide>
                          <div class="office-list-item">
                                <div class="single__img">
                                    <div class="image"> 
                                        <img src="/images/sales/sales order.jpg" alt="Zamówienie klienta" class="slider_img" @click="index = 1">
                                        <div class="caption">
                                            <div class="lupa "></div>
                                        </div>                                    
                                    </div>
                                </div><!-- end single__img -->
                            </div>
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

components: {
    Swiper,
    SwiperSlide
    },
directives: {
  swiper: directive
  },

  data() {
    return {
      moduleNumber: 0,
      swiperOptions: {
        slidesPerView : 1,
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
              slidesPerView : 1
          },
          768:{
              slidesPerView : 1
          },
          640:{
              slidesPerView : 1
          },
          320:{
              slidesPerView : 1
          }
        }
      }      
    };
  },

};
</script>

<style scoped>
.slider_img {
 position: absolute;
 
  width: 99%;
  height: 99%;
}

.image {
}
.image .caption {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.7s;
    opacity: 0;
}
.image .caption:hover {
    opacity: 1;
    visibility: visible;
}
.lupa {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    background: url('~@/static/images/zoom-in.png');
    background-repeat: no-repeat;
    background-position: center center;
}
</style>