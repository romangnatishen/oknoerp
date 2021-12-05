  <template>
    <div> 
      <section class="ofc-caoursel-area res-testi-area teatimonial-area">
        <div class="ofc-caoursel-fluid">
            <div class="container-fluid no-padding-lr">
                <div class="row">
                    <div class="col-md-12">
                        <div class="testimonial-list">
                          <swiper :options="swiperOptions">
                            <swiper-slide
                              v-for="(imageItem, i) in imgArray"
                              :key="i"                                                          
                            >
                            <div class="office-list-item" >
                                  <div class="single__img">
                                      <div class="image"> 
                                          <img :src="`${imageItem.url}`" :alt="`${imageItem.alt}`" class="slider_img">
                                          <div class="caption">
                                              <div class="lupa" @click="setImageIndex(i)"></div>
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
      <client-only placeholder="Loading...">
          <VueGallerySlideshow :images="imgArray" :index="imageIndex" @close="imageIndex = null" />``
      </client-only>
    </div>
</template>

<script>

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {

components: {
    Swiper,
    SwiperSlide,
    VueGallerySlideshow

    },
directives: {
  swiper: directive
  },
  mounted() {

    // this.imgArray.forEach(img => this.images.push(img.link));
  },
  props: {
    imgArray: {
      type: Array,
      default: () => []
    }
  },    
  methods: {
    setImageIndex(imageIndex) {
      this.imageIndex = imageIndex;
      console.log('current image index', imageIndex);
    }
  },  
  data() {
    return {
    images: [],

      moduleNumber: 0,
        imageIndex: null,
        swiperOptions: {
          observer: true,
          observeParents: true,
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

.vgs-customized {
    max-width: 100%;
    margin: 0.5rem auto 0;
    left: 0.5rem;
    right: 0.5rem;
    height: 80%;
    border-radius: 12px;
    background-color: #000;
}
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