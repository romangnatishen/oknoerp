<template>
  <section class="clta-area area-padding-2 theme-bg-gray pt-70px pb-70px">
      <div class="clta-bg"></div>
      <div class="clta-fluid">
          <div class="container">
              <div class="row">
                  <div class="col-md-3">
                      <div class="avivon-heading white-heading">
                          <h2 class="avivon__title">Masz pytania? Możesz również wysłać do nas zapytanie</h2>
                      </div><!-- end avivon-heading -->
                  </div><!-- end col-md-3 -->
                  <div class="col-md-9 shared-form-box">
                      <div class="row">

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
                                    <input type="text" placeholder="Imię i nazwisko">
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
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <MessageCheckBoxes />
                        </div>
                    </div>

                  </div><!-- end col-md-9 -->
              </div><!-- end row -->

          </div><!-- container -->
      </div><!-- end clta-fluid -->
  </section>
</template>

<script>
    import MessageCheckBoxes from "./MessageCheckboxes.vue";

    export default {
        name: "CallToAction",
        components: {MessageCheckBoxes}
    }
</script>

<style scoped>

</style>
