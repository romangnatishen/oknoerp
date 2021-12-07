<template>
  <section class="clta-area area-padding-2 theme-bg-gray pt-70px pb-70px">
      <div class="clta-bg"></div>
      <div class="clta-fluid">
          <div class="container">
              <div class="row">
                  <div class="col-md-3">
                      <div class="avivon-heading white-heading">
                          <h2 class="avivon__title">Masz pytania? Możesz również do nas napisać</h2>
                      </div><!-- end avivon-heading -->
                  </div><!-- end col-md-3 -->
                  <div class="col-md-9 shared-form-box">
                      <div class="row">

                        <div class="col-md-12">
                            <div class="shared-form">
                                <form action="#">
                                    <input type="text" v-model="company" placeholder="Nazwa firmy">
                                </form>
                            </div><!-- end shared-form -->
                        </div><!-- end col-md-6 -->

                        <div class="col-md-6">                          
                            <div class="shared-form">
                                <form action="#">
                                    <input type="text" v-model="name" placeholder="Imię i nazwisko">
                                    <input type="text" v-model="email" placeholder="Email">
                                    <input class="input__number" v-model="telephone" type="text" placeholder="Numer telefonu">
                                </form>
                            </div><!-- end shared-form -->
                        </div><!-- end col-md-6 -->
                        <div class="col-md-6">
                            <div class="shared-form">
                                <textarea name="message" v-model="comment" placeholder="Dodatkowy opis"></textarea>
                                <button class="form__btn" value="submit" @click="sendLeadInformation()">
                                    Wyślij <span class="fontello icon-angle-double-right" ></span>
                                </button>
                            </div><!-- end shared-form -->
                        </div><!-- end col-md-6 -->
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p class="app-newsletter--item--text blue">
                                <b v-if="errorText">{{errorText}}</b> 
                                <b v-if="sendResText">{{sendResText}}</b> 
                            </p>
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
        components: {MessageCheckBoxes},
      data() {
        return {                        
          errorText: '', 
          sendResText: '',
          company:"",
          name:"",
          telephone:"",
          email:"",
          comment:""
        }
      },

        methods: {
          async sendLeadInformation() {  
            this.errorText = '';  this.sendResText = '';
            if (!this.name||!this.email) {
                this.errorText = 'Prosimy o uzupełnienie pól Imie i nazwisko oraz adres Email przed wysłaniem wiadomości'
            }
            
            const firstAgreement = this.$store.getters['windows_production/firstAgreement'];

            const secondAgreement = this.$store.getters['windows_production/secondAgreement'];

            if (firstAgreement!=true||secondAgreement!=true) {
                this.errorText = 'Prosimy o zaznaczenie wszystkich zgód przed wysłaniem wiadomości'
            }

            if (!this.errorText) {
             const newLeadInformation = {
                  company: this.company,
                  name: this.name,
                  telephone: this.telephone,
                  email: this.email,
                  comment: this.comment
              };
              const sendRes = await this.$store.dispatch('windows_production/sendLeadInformation',newLeadInformation);
              if (sendRes.status === 200) {
                  this.company = "";
                  this.name = "";
                  this.telephone = "";
                  this.email = "";
                  this.comment = "";
                  this.sendResText = "Powiadomienie zostało  pomyślnie wysłane. Skontaktujemy się z Państwem w najbliższym czasie";
                  setTimeout(() => {
                    window.scrollTo({ top: 0 });
                  }, 5000);
                              
                } else {
                  this.sendResText = "Bład podczas wysyłki powiadomienia!";
              }
            }

          },
        }
    }
</script>

<style scoped>

</style>
