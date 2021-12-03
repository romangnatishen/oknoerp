<template>
    <div>
      <section :class="`menu-area menu-area-3 ${sticky ? 'active' : ''}`">
          <div class="top-menu-area">
              <div class="container-fluid">
                  <div class="row">
                      <div :class="`col-md-12 menu-full-box theme-bg-light no-padding-lr ${sticky ? 'active' : ''}`">
                          <div class="menu-full-width">
                              <div :class="`logo-box ${sticky ? 'active' : ''}`">
                                  <div class="logo">
                                      <a href="/" title="Avivon"><img src="/images/logo.png" alt="logo"></a>
                                  </div><!-- end logo -->
                              </div><!-- end logo-box -->
                              <div class="main-menu">
                                  <nav class="menu__wrapper">
                                      <ul class="dropdown-main">
                                          <li>
                                              <a href="#">home</a>
                                              <div class="main__dropdown-menu">
                                                  <ul>
                                                    <li><nuxt-link to="/">home 01</nuxt-link></li>
                                                    <li><nuxt-link to="/index2">home 02</nuxt-link></li>
                                                    <li><nuxt-link to="/index3">home 03</nuxt-link></li>f
                                                  </ul>
                                              </div><!-- end main__dropdown-menu -->
                                          </li>
                                          <li>
                                              <a href="#">services</a>
                                              <div class="main__dropdown-menu">
                                                  <ul>
                                                    <li><nuxt-link to="/service1">services 01</nuxt-link></li>
                                                    <li><nuxt-link to="/service2">services 02</nuxt-link></li>
                                                    <li><nuxt-link to="/single-service">single service</nuxt-link></li>
                                                  </ul>
                                              </div><!-- end main__dropdown-menu -->
                                          </li>
                                          <li>
                                              <a href="#">pages</a>
                                              <div class="main__dropdown-menu">
                                                  <ul>
                                                    <li><nuxt-link to="/about-us1">about us 01</nuxt-link></li>
                                                    <li><nuxt-link to="/about-us2">about us 02</nuxt-link></li>
                                                    <li><nuxt-link to="/our-mission">our mission</nuxt-link></li>
                                                    <li><nuxt-link to="/our-history">our history</nuxt-link></li>
                                                    <li><nuxt-link to="/our-partnership">partnership</nuxt-link></li>
                                                  </ul>
                                              </div><!-- end main__dropdown-menu -->
                                          </li>
                                          <li>
                                              <a href="#">cases</a>
                                              <div class="main__dropdown-menu">
                                                  <ul>
                                                    <li><nuxt-link to="/cases1">cases 01</nuxt-link></li>
                                                    <li><nuxt-link to="/cases2">cases 02</nuxt-link></li>
                                                    <li><nuxt-link to="/single-cases">single case</nuxt-link></li>
                                                  </ul>
                                              </div><!-- end main__dropdown-menu -->
                                          </li>
                                          <li>
                                              <a href="#">blog</a>
                                              <div class="main__dropdown-menu">
                                                  <ul>
                                                    <li><nuxt-link to="/blog-post">blog post</nuxt-link></li>
                                                    <li><nuxt-link to="/single-blog">single blog</nuxt-link></li>
                                                  </ul>
                                              </div><!-- end main__dropdown-menu -->
                                          </li>
                                          <li>
                                            <nuxt-link to="/contact">contact</nuxt-link>
                                          </li>
                                      </ul>
                                  </nav><!-- end menu__wrapper -->
                                  <div class="logo-right-button">
                                      <div class="lang-dropdown">
                                          <ul>
                                              <li>
                                                  <a href="#">
                                                      <img src="images/flag.jpg" alt="English">
                                                      english
                                                      <i class="fas fa-caret-down"></i>
                                                  </a>
                                                  <div class="lang-drop-item">
                                                      <a href="#">
                                                          <img src="images/flag.jpg" alt="English">
                                                          english
                                                      </a>
                                                      <a href="#">
                                                          <img src="images/flag2.jpg" alt="Usa">
                                                          usa
                                                      </a>
                                                      <a href="#">
                                                          <img src="images/flag3.jpg" alt="France">
                                                          france
                                                      </a>
                                                  </div>
                                              </li>
                                          </ul>
                                      </div><!-- end lang-dropdown -->
                                      <div class="contact-para">
                                          <ul class="social__links">
                                              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                              <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                              <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                          </ul>
                                      </div><!-- end contact-para -->
                                  </div><!-- end logo-right-button -->
                              </div><!-- end main-menu -->
                          </div><!-- end menu-full-width -->
                      </div><!-- end col-log-12 -->
                  </div><!-- end row -->
              </div><!-- end container -->
          </div><!-- end top-menu-area -->
      </section>
    </div>
</template>

<script>
    export default {
      name: "NavThree",
      data(){
        return {
          sticky: false
        }
      },
      mounted(){
        window.addEventListener('scroll', this.handleScroll);
      },
      methods: {

        handleScroll () {
          if (window.scrollY > 70) {
            this.sticky = true
          }
          else if (window.scrollY < 70) {
            this.sticky = false
          }
        },

      }
    }
</script>

<style scoped>

</style>
