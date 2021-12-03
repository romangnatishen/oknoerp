<template>
    <div>
      <section class="footer-area theme-bg-dark">
          <div class="footer-fluid">
              <div class="container">
                  <div class="row">
                    <div class="copyright-shared">
                        <div class="col-md-8 no-padding-lr">
                            <p class="copy__desc">&copy;Copyright 2021 <a href="mailto:oknoerp@axioma.pl">axioma.pl</a></p>
                        </div><!-- end col-md-8 -->
                        <div class="col-md-4 text-right no-padding-lr">
                            <ul class="copy__links">
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div><!-- end col-md-4 -->
                    </div><!-- end copyright-shared -->
                  </div><!-- end row -->
              </div><!-- container -->
          </div><!-- end footer-fluid -->
      </section>

      <div @click="scrollTop" id="scroll-top" :style="`display: ${scrollBtn ? 'block' : 'none'}`">
          <i class="fas fa-arrow-up" title="Go top"></i>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Footer",
      data(){
        return {
          scrollBtn: false,
        }
      },
      mounted(){
        window.addEventListener('scroll', this.handleScroll);
      },
      methods: {

        handleScroll () {
          if (window.scrollY > 100) {
            this.scrollBtn  = true
          }
          else if (window.scrollY < 100) {
            this.scrollBtn  = false
          }
        },

        scrollTop () {
            window.scrollTo(0, 0);
        }

      }
    }
</script>

<style scoped>

</style>
