<template>
  <section class="service-area responsive-content avivon-service area-padding text-center theme-bg-gray service-page-2 pt-40px">
      <div class="service-fluid">
          <div class="container">
            <div class="row">
                <div class="col-md-12 primary-padding">
                    <div class="avivon-heading">
                    <h2 class="avivon__title fourth__title">Obszary OknoERP</h2>
                    </div>
                </div>
            </div>

              <div class="row service-box service-box2 service--box mb-30px masonary-layout">
                  <div v-for="(moduleItem, i) in modulesArray"
                      :key="i"                                                          
                      class="col-md-4 col-sm-6 col-xs-12 masonary-item">
                      <div class="shared-service">
                          <div class="shared-content">
                              <div class="service__icon mb-40px"><span :class="`${moduleItem.icon}`"></span></div>
                              <div class="service__title mb-35px">
                                  <h3 class="service__title-title">
                                      <nuxt-link :to="`${moduleItem.url}`">{{moduleItem.tittle}}</nuxt-link>
                                  </h3>
                              </div><!-- end service__title -->
                              <div class="service__desc">
                                  <p class="service__desc-desc">
                                      {{moduleItem.desc}}
                                  </p>
                              </div><!-- end service__desc -->
                          </div><!-- end shared-content -->
                      </div><!-- end shared-service -->
                  </div><!-- end col-md-4 -->
              </div><!-- end row -->
          </div><!-- container -->
      </div><!-- end service-fluid -->
  </section>
</template>

<script>
    export default {
        name: "ServicePageTwo",

        data() {
            return {
                modulesArray: [
                  {
                    tittle:'Integracje', 
                    url:'/details', 
                    desc:'Pełna integracja z WH Okna, Licz Okno (m.in. Alicad, MB-Cad, Reynal, Sapa Designer, Yawal Constructor)', 
                    icon:'fontello icon-cog'
                    },
                  {
                    tittle:'Sprzedaż', 
                    url:'/details', 
                    desc:'Analiza wynikowa kontrahentów wg umów, rabaty, umowy montażowe', 
                    icon:'fontello icon-chart-bar'
                    },
                  {
                    tittle:'Zaopatrzenie', 
                    url:'/details', 
                    desc:'Różne metody zamawiania materiałów (pod zlecenie, mini/max), kontrola zmiany cen od dostawców, dedykowane opracowania pod zamówienie szyb, paneli, płyt', 
                    icon:'fontello icon-wpforms'
                    },
                  {
                    tittle:'Magazyn', 
                    url:'/details', 
                    desc:'Rezerwacja materiału pod zlecenie, magazyn wysokiego składowania, skanery, interfejs mobilny, raporty wydań na produkcję, kanban', 
                    icon:'fontello icon-barcode'
                    },
                  {
                    tittle:'Produkcja', 
                    url:'/details', 
                    desc:'Plany produkcyjne, automatyczne rozliczanie umów, braki oraz dodatkowe wydania na produkcję, analizy rentowności wg umów', 
                    icon:'fontello icon-industry'
                    },
                  {
                    tittle:'Spedycja', 
                    url:'/details', 
                    desc:'Planowanie oraz kompletacja wysyłki na urządzeniu mobilnym (spakowanie / umieszczenie na stojakach), różne adresy dostawy, automatyczne generowanie CRM. Analiza kompletności wysyłki', 
                    icon:'fontello icon-truck'
                    },
                  {
                    tittle:'Obieg dokumentów', 
                    url:'/details', 
                    desc:'Reklamacje od dealeróœ, Rejestr niezgodności na wszystkich etapach produkcji, obsługa reklamacji do dostawców', 
                    icon:'fontello icon-newspaper'
                    },
                {
                    tittle:'Serwis i reklamacje', 
                    url:'/details', 
                    desc:'Reklamacje od dealeróœ, Rejestr niezgodności na wszystkich etapach produkcji, obsługa reklamacji do dostawców', 
                    icon:'fontello icon-users'
                    },
                  {
                    tittle:'Portal klienta', 
                    url:'/details', 
                    desc:'Monitorowanie statusów zleceń, komunikaty dotyczące rozliczeń, planowanie wysyłki, obsługa reklamacji w trybie online', 
                    icon:'fontello icon-chrome'
                    },


                ],
            }
        },        
    }
</script>

<style scoped>

</style>
