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
        <li><a href="/">Start</a></li>
        <li><a href="/details">Obszary systemu</a></li>
        <li><a href="/implementation">Wdrożenie</a></li>
        <li class="menu__title-only">
          Firma <i class="fas fa-angle-down"></i>
        </li>
        <li><a href="/contact">O nas</a></li>
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
                        <nuxt-link to="/">Start</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/details">Obszary OknoERP</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/implementation">Wdrożenie</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/contact">O firmie</nuxt-link>
                      </li>
                      <!-- <li>
                        <nuxt-link to="/contact">Kontakt</nuxt-link>
                      </li> -->
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
