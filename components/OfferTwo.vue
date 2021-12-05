<template>
  <section
    v-observe-visibility="onVisibilityChange"
    class="offer-area responsive-content inspire-area area-padding-local mt-120px"
  >
    <div class="offer-fluid">
      <div class="container">
        <div class="row offer-content">
          <div class="inspire-list-box">
            <div class="inspire-img mb-30px"></div>
            <!-- end inspire-img -->
            <div class="story-content">
              <div class="top-story">
                <span class="fontello icon-trophy success__icon"></span>
                <span class="story__numbr counter">
                  <countTo
                    :startVal="0"
                    :endVal="startCounter ? 350 : 0"
                    :duration="3000"
                  ></countTo>
                </span>
                <span class="story__numbr">+</span>
              </div>
              <!-- end top-story -->
              <p class="success__desc">Wykonanych projektów</p>
            </div>
            <!-- end story-content -->
          </div>
          <!-- end col-md-6 -->
          <div class="offer-list-box">
            <div class="offer-list">
              <div class="avivon-heading">
                <h2 class="avivon__title inspire-title">
                  Dlaczego my?
                </h2>
                <p class="avivon__desc mt-5px mb-15px">
                  <br />
                  Grupa firm Axioma specjalizuje się w systemach automatyzujących oraz wspomagających
                  zarządzanie w przedsiębiorstwach z różnych obszarach. 
                  <br>
                  W ciągu ostatnich 20 lat zrealizowaliśmy ponad 350 projektów w takich krajach jak: Polska, Słowenia, Ukraina, Rosja
                  i Białoruś w takich branżach jak: Inżynieria, Stolarka okienna, Przetwórstwo żywności, Logistyka, Transport, Rolnictwo.
                  <br>
                  Kluczową technologją w naszych projektach jest platforma "1C Enterprise 8" oraz systemy zbudowane na niej. 
                  W 2018 roku uzyskaliśmy status «1С: Localization partner» -  najwyższy poziom partnertwa dla firm rozwijających,
                  tworzących własne rozwiązania dla globalnego biznesu lub lokalnie w wybranych
                  krajach. 
                  <br>
                  W chwili obecnej rozwijamy i wdrażamy następujące rozwiązania na terytorium
                  Polski: 1C:DRIVE, 1C:ERP, 1C:CRM.

                  Od 2015 roku pracownicy naszego biura w Krakowie zajmują się automatyzacją procesów
                  w przedsiębiorstwach produkcyjnych i handlowych na terenie Polski.

                  W międzyczasie opracowaliśmy i wdrożyliśmy własne rozwiązania między innymi dla: Morski Terminal
                  Masowy Gdynia Sp. z o.o., Dworzec autobusowy MDA S.A. Kraków, Fabryka okien OknoPlus
                  Sp. Z o.o. i PPH Finestra Sp. Z o.o., LS Poland sp oraz dla jednego z największych terminali przetwarzania
                  i sprzedaży węgla LS Poland Sp. z o.o. 

                  Dzięki platformie <b>1C:Enterprise</b> masz pewność, że kupujesz
                  otwary system, który może rozwijać się razem z Twoją firmą. <br />
                  Twoje pomysły mogą być wdrożone przez nas szybciej niż w
                  programach oferowanych przez konkurencję. Nie pytaj, czy w
                  rozwiązaniach 1C jest coś możliwe. Pytaj: za ile i na kiedy?
                </p>

                <a href="#" class="get__btn"
                  >Dowiedż się więcej
                  <span class="fontello icon-angle-double-right"></span>
                </a>
              </div>
              <!-- end avivon-heading -->
            </div>
            <!-- end offer-list -->
          </div>
          <!-- end offer-list-box -->
        </div>
        <!-- end row -->
      </div>
      <!-- container-fluid -->
    </div>
    <!-- end offer-fluid -->
  </section>
</template>

<script>
import countTo from "vue-count-to";
import { ObserveVisibility } from "vue-observe-visibility";

export default {
  name: "OfferTwo",
  components: { countTo },
  directives: {
    ObserveVisibility
  },
  data() {
    return {
      startCounter: false
    };
  },
  methods: {
    onVisibilityChange(isVisible) {
      if (isVisible) {
        this.startCounter = true;
      }
    }
  }
};
</script>

<style scoped>
.area-padding-local {
  padding: 55px 0;
}
@media (max-width: 1440px) {
  .area-padding-local {
    padding: 50px 0;
  }
}
@media (max-width: 1366px) {
  .area-padding-local {
    padding: 40px 0;
  }
}
@media (max-width: 1280px) {
  .area-padding-local {
    padding: 30px 0;
  }
}
@media (max-width: 1199px) {
  .area-padding-local {
    padding: 30px 0;
  }
}
@media only screen and (min-width: 320px) and (max-width: 479px) {
  .area-padding-local {
    padding: 30px 0;
  }
}
</style>
