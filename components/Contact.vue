<template>
  <section class="contact-area responsive-content area-padding">
    <div class="contact-fluid">
      <div class="container contact-info avivon-pb">
        <div class="row">
          <div class="col-md-4 primary-padding">
            <div class="avivon-heading">
              <h2 class="avivon__title">Potrzebujesz więcej informacji?</h2>
              <p class="avivon__desc contact__desc mt-50px">
                Nasz zespół jest do Twojej dyspozycji. Umów się na prezentacje.
                Chętnie odpowiemy na wszystkie Twoje pytania.
              </p>
            </div>
            <!-- end avivon-heading -->
          </div>
          <!-- end col-md-4 -->
          <div class="col-md-8">
            <div class="comment__form contact__form">
              <form action="#">
                <div class="input__box-input">
                  <input type="text" placeholder="Nazwa firmy" />
                </div>
                <div class="input__box-input email-box">
                  <input type="text" placeholder="Imię i nazwisko" />
                </div>
                <div class="input__box-input">
                  <input type="text" placeholder="Numer telefonu" />
                </div>
                <div class="input__box-input email-box">
                  <input type="email" placeholder="email" />
                </div>
                <textarea
                  name="message"
                  placeholder="Dodatkowe informacje"
                ></textarea>
                <button class="submit__btn-btn mb-15px">
                  Wyślij zapytanie
                  <span class="fontello icon-angle-double-right"></span>
                </button>
                <MessageCheckBoxes />
              </form>
            </div>
            <!-- end comment__form -->
          </div>
          <!-- end col-md-8 -->
        </div>
        <!-- end row -->
      </div>
      <!-- container -->
    </div>
    <!-- end contact-fluid -->
  </section>
</template>

<script>
   import MessageCheckBoxes from "./MessageCheckboxes.vue";

    export default {
        name: "Contact",
        components: {MessageCheckBoxes}
    }
</script>

<style scoped></style>
