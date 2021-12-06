<template>
  <div class="side-bar">
    <div class="side__shared mb-30px">
      <h3 class="side__bar-title">Obszary OknoERP</h3>
      <ul class="side__bar-links">
        <li>
          <a @click="setModuleNumber(0)">Podstawowe informacje</a>
          <span class="fontello icon-angle-double-right"></span>
        </li>
        <!-- <li>
          <a @click="setModuleNumber(0.5)">Integracje </a>
          <span class="fontello icon-angle-double-right"></span>
        </li> -->
        <li>
          <a @click="setModuleNumber(1)">Sprzedaż </a>
          <span class="fontello icon-angle-double-right"></span>
        </li>
        <li>
          <a @click="setModuleNumber(2)">Zaopatrzenie</a>
          <span class="fontello icon-angle-double-right"></span>
        </li>
        <li>
          <a @click="setModuleNumber(3)">Magazyn</a>
          <span class="fontello icon-angle-double-right"></span>
        </li>
        <li>
          <a @click="setModuleNumber(4)">Produkcja</a>
          <span class="fontello icon-angle-double-right"></span>
        </li>
        <li>
          <a @click="setModuleNumber(5)">Wysyłka wyrobów gotowych</a>
          <span class="fontello icon-angle-double-right"></span>
        </li>
        <li>
          <a @click="setModuleNumber(6)">Moduł reklamacyjny</a>
          <span class="fontello icon-angle-double-right"></span>
        </li>
        <li>
          <a @click="setModuleNumber(7)">Portal klienta B2B</a>
          <span class="fontello icon-angle-double-right"></span>
        </li>
      </ul>
    </div>
    <!-- end side__shared -->
    <div class="side__shared help__shared help__bg mb-30px">
      <div class="avivon__help-center">
        <h3 class="side__bar-title__title">
          Chcesz Dowiedzieć się więcej?
        </h3>
        <p class="avivon__help-desc__desc">
          Nasz zespół jest do Twojej dyspozycji. Umów się na
          prezentacje. Chętnie odpowiemy na wszystkie Twoje pytania.
        </p>
        <h4 class="avivon__help-title__title">+48 692 059 517</h4>
      </div>
      <!-- end avivon__help-center -->
    </div>
    <!-- end side__shared -->
    <!-- <div class="download__btn">
      <a href="#" class="download__btn-btn">
        Pobierz prezentację
        <span class="fontello icon-angle-double-right"></span>
      </a>
    </div> -->
    <!-- end download__btn -->
  </div>
  <!-- end side-bar -->

</template>

<script>
    export default {
        name: "SlibeBarWindowsProduction",
        methods: {

          setModuleNumber(currentModuleNumber) {  
            // console.log('setting module numer', currentModuleNumber);
              this.$store.dispatch('windows_production/setModuleNumber',{moduleNumber:currentModuleNumber});
              window.scrollTo({ top: 0 });
          },
        },

    }
</script>
