<template>
  <div>
    <div :class="`body-overlay ${mobileToggle ? 'active' : ''}`"></div>
    <div
      :class="`offcanvas-menu ${mobileToggle ? 'active' : ''}`"
      class="offcanvas-menu"
    >
      <div @click="mobileToggle = !mobileToggle" class="menu__close"></div>
      <!-- end menu__close -->
      <ul class="off__menu">
        <li class="menu__title-only">OknoERP <i class="fas fa-angle-down"></i></li>
        <li><a href="/">O nas</a></li>
        <li><a href="/index2">Obszary systemu</a></li>
        <li><a href="/index3">Wdrożenie</a></li>
        <li class="menu__title-only">
          Kontakt <i class="fas fa-angle-down"></i>
        </li>
        <li><a href="/contact">Napisz do nas</a></li>
      </ul>
    </div>
    <section :class="`menu-area menu--area ${sticky ? 'active' : ''}`">
      <div class="top-menu-area">
        <div class="container">
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
                        <nuxt-link to="/contact">O nas</nuxt-link>
                      </li>
                      <li>
                        <a href="#">Systemy 1C</a>
                        <div class="main__dropdown-menu">
                          <ul>
                            <li>
                              <nuxt-link to="/products/erp">Duże przedsiębiorstwa</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/products/drive">Małe i średnie firmy</nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/cases2">Platforma 1C Enterprise</nuxt-link>
                            </li>
                          </ul>
                        </div>
                        <!-- end main__dropdown-menu -->
                      </li>
                      <li>
                        <nuxt-link to="/branch-solutions">Rozwiązania branżowe</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/our-services">Nasze usługi</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/contact">Kontakt</nuxt-link>
                      </li>
                    </ul>
                  </nav>
                  <!-- end menu__wrapper -->
                </div>
                <!-- end main-menu -->
              </div>
              <!-- end menu-full-width -->
            </div>
            <!-- end col-log-12 -->
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
  name: "NavTwo",
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
