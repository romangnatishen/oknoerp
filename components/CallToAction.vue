<template>
  <section class="clta-area area-padding-2 theme-bg-gray">
      <div class="clta-bg"></div>
      <div class="clta-fluid">
          <div class="container">
              <div class="row">
                  <div class="col-md-3">
                      <div class="avivon-heading white-heading">
                          <h2 class="avivon__title">Masz pytania?</h2>
                      </div><!-- end avivon-heading -->
                  </div><!-- end col-md-3 -->
                  <div class="col-md-9 shared-form-box">
                      <div class="col-md-12">
                          <div class="shared-form">
                              <form action="#">
                                  <input type="text" placeholder="Nazwa firmy">
                              </form>
                          </div><!-- end shared-form -->
                      </div><!-- end col-md-6 -->

                      <div class="col-md-6">
                          <div class="shared-form">
                              <form action="#">
                                  <input type="text" placeholder="Dane osoby">
                                  <input type="text" placeholder="Email">
                                  <input class="input__number" type="text" placeholder="Numer telefonu">
                              </form>
                          </div><!-- end shared-form -->
                      </div><!-- end col-md-6 -->
                      <div class="col-md-6">
                          <div class="shared-form">
                              <textarea name="message" placeholder="Dodatkowy opis"></textarea>
                              <button class="form__btn" value="submit">
                                  Wyślij <span class="fontello icon-angle-double-right"></span>
                              </button>
                          </div><!-- end shared-form -->
                      </div><!-- end col-md-6 -->
                  </div><!-- end col-md-9 -->
              </div><!-- end row -->
          </div><!-- container -->
      </div><!-- end clta-fluid -->
  </section>
</template>

<script>
    export default {
        name: "CallToAction"
    }
</script>

<style scoped>

</style>
