<template>
  <div>
    <div :class="`body-overlay ${mobileToggle ? 'active' : ''}`"></div>
    <div :class="`offcanvas-menu ${mobileToggle ? 'active' : ''}`">
      <div @click="mobileToggle = !mobileToggle" class="menu__close"></div>
      <!-- end menu__close -->
      <ul class="off__menu">
        <li class="menu__title-only">home <i class="fas fa-angle-down"></i></li>
        <li><a href="/">home 01</a></li>
        <li><a href="/index2">home 02</a></li>
        <li><a href="/index3">home 03</a></li>
        <li class="menu__title-only">
          services <i class="fas fa-angle-down"></i>
        </li>
        <li><a href="/service1">services 01</a></li>
        <li><a href="/service2">services 02</a></li>
        <li><a href="/single-service">single service</a></li>
        <li class="menu__title-only">
          pages <i class="fas fa-angle-down"></i>
        </li>
        <li><a href="/about-us1">about us 01</a></li>
        <li><a href="/about-us2">about us 02</a></li>
        <li><a href="/our-mission">our mission</a></li>
        <li><a href="/our-history">our history</a></li>
        <li><a href="/our-partnership">partnership</a></li>
        <li class="menu__title-only">
          cases <i class="fas fa-angle-down"></i>
        </li>
        <li><a href="/cases1">cases 01</a></li>
        <li><a href="/cases2">cases 02</a></li>
        <li><a href="/single-cases">single case</a></li>
        <li class="menu__title-only">blog <i class="fas fa-angle-down"></i></li>
        <li><a href="/blog-post">blog post</a></li>
        <li><a href="/single-blog">single blog</a></li>
        <li class="menu__title-only">
          contact <i class="fas fa-angle-down"></i>
        </li>
        <li><a href="/contact">contact us</a></li>
      </ul>
    </div>
    <section :class="`menu-area ${sticky ? 'active' : ''}`">
      <div class="top-menu-area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="menu-full-width">
                <div :class="`logo-box ${sticky ? 'active' : ''}`">
                  <div @click="mobileToggle = !mobileToggle" class="site-open">
                    <span class="open__only"></span>
                    <span class="open__only"></span>
                    <span class="open__only"></span>
                  </div>
                  <!-- end site-open -->
                  <div class="logo">
                    <nuxt-link to="/" title="Avivon"
                      ><img src="/images/logo.png" alt="logo"
                    /></nuxt-link>
                  </div>
                  <!-- end logo -->
                </div>
                <!-- end logo-box -->
                <div class="main-menu">
                  <nav class="menu__wrapper">
                    <ul class="dropdown-main">
                      <li>
                        <a href="#">home</a>
                        <div class="main__dropdown-menu">
                          <ul>
                            <li><nuxt-link to="/">home 01</nuxt-link></li>
                            <li><nuxt-link to="/index2">home 02</nuxt-link></li>
                            <li><nuxt-link to="/index3">home 03</nuxt-link></li>
                            <li><nuxt-link to="/index4">home 04</nuxt-link></li>
                          </ul>
                        </div>
                        <!-- end main__dropdown-menu -->
                      </li>
                      <li>
                        <a href="#">services</a>
                        <div class="main__dropdown-menu">
                          <ul>
                            <li>
                              <nuxt-link to="/service1">services 01</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/service2">services 02</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/single-service"
                                >single service</nuxt-link
                              >
                            </li>
                          </ul>
                        </div>
                        <!-- end main__dropdown-menu -->
                      </li>
                      <li>
                        <a href="#">pages</a>
                        <div class="main__dropdown-menu">
                          <ul>
                            <li>
                              <nuxt-link to="/about-us1">about us 01</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/about-us2">about us 02</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/our-mission"
                                >our mission</nuxt-link
                              >
                            </li>
                            <li>
                              <nuxt-link to="/our-history"
                                >our history</nuxt-link
                              >
                            </li>
                            <li>
                              <nuxt-link to="/our-partnership"
                                >partnership</nuxt-link
                              >
                            </li>
                          </ul>
                        </div>
                        <!-- end main__dropdown-menu -->
                      </li>
                      <li>
                        <a href="#">cases</a>
                        <div class="main__dropdown-menu">
                          <ul>
                            <li>
                              <nuxt-link to="/cases1">cases 01</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/cases2">cases 02</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/single-cases"
                                >single case</nuxt-link
                              >
                            </li>
                          </ul>
                        </div>
                        <!-- end main__dropdown-menu -->
                      </li>
                      <li>
                        <a href="#">blog</a>
                        <div class="main__dropdown-menu">
                          <ul>
                            <li>
                              <nuxt-link to="/blog-post">blog post</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/single-blog"
                                >single blog</nuxt-link
                              >
                            </li>
                          </ul>
                        </div>
                        <!-- end main__dropdown-menu -->
                      </li>
                      <li>
                        <nuxt-link to="/contact">contact</nuxt-link>
                      </li>
                    </ul>
                  </nav>
                  <!-- end menu__wrapper -->
                  <div class="logo-right-button">
                    <div class="lang-dropdown">
                      <ul>
                        <li>
                          <a href="#">
                            <img src="/images/flag.jpg" alt="English" />
                            english
                            <i class="fas fa-caret-down"></i>
                          </a>
                          <div class="lang-drop-item">
                            <a href="#">
                              <img src="/images/flag.jpg" alt="English" />
                              english
                            </a>
                            <a href="#">
                              <img src="/images/flag2.jpg" alt="Usa" />
                              usa
                            </a>
                            <a href="#">
                              <img src="/images/flag3.jpg" alt="France" />
                              france
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!-- end lang-dropdown -->
                    <div class="contact-para">
                      <p>+ 888 999 0000</p>
                      <span class="fontello icon-phone-call phone-call"></span>
                    </div>
                    <!-- end contact-para -->
                  </div>
                  <!-- end logo-right-button -->
                </div>
                <!-- end main-menu -->
              </div>
              <!-- end menu-full-width -->
            </div>
            <!-- end col-md-12 -->
          </div>
          <!-- end row -->
        </div>
        <!-- end container -->
      </div>
      <!-- end top-menu-area -->
    </section>
  </div>
</template>

<script>
export default {
  name: "NavOne",
  data() {
    return {
      sticky: false,
      mobileToggle: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    }
  }
};
</script>

<style scoped></style>
