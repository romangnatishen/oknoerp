<template>                                    
    <div class="single-content">
        <div class="avivon-heading">
            <h2 class="avivon__title">Produkcja</h2>
            <p class="avivon__desc mt-30px mb-40px">
                Moduł produkcyjny zawiera w sobie następujące funkcjonalność        
            </p>       
            <SwiperSlider :imgArray="images"/>
            <div class="mb-45px"> 
                <ul class="plan__list">
                    <li>
                        <i class="fas fa-check-circle"></i> Funkcjonalność działu technicznego (BOM, karta technologiczna)    
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Moduł do planowania produkcji    
                    </li>                
                        <i class="fas fa-check-circle"></i> Bieżąca obsługa procesów na produkcji, w tym pulpit pracownika na produkcji    
                    </li>
                </ul>        
            </div>

        </div><!-- end avivon-heading-->

        <div class="single__case">
            <div class="single__case-content singlecases__cont mb-70px">
                <span class="fontello icon-exploration case-icon"></span>
                <h3 class="single__case-title__title mt-30px mb-30px">
                    Jakość obsługi klientów
                </h3>
                <div class="mb-45px"> 
                    <ul class="plan__list mt-45px">
                        <li>
                            <i class="fas fa-check-circle"></i> Szybka informacja o aktualnym stanie zlecenia na podstawie planu produkcyjnego    
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i> Aktualna wiedza o kompletności zamówienia i możlwiości jego wyprodukowania    
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i> Analiza dostępności maszyn produkcyjnych oraz zasobów ludzkich do wykonania zlecenia w konkretnym terminie    
                        </li>
                    </ul>        
                </div>
            </div><!-- end single__case-content -->
            <div class="single__case-content mb-60px theme-btb pb-50px">
                <span class="fontello icon-human-resources case-icon"></span>
                <h3 class="single__case-title__title mt-30px mb-30px">
                    Elastyczność systemu
                </h3>
                <div class="mb-45px"> 
                    <ul class="plan__list mt-45px">
                        <li>
                            <i class="fas fa-check-circle"></i> Planowanie produkcji z dokładnością do każdego gniazda produkcyjnego (Plan wydania materiałów pod konkretne zlecenie, plan operacyjny pod każde stanowisko)      
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i> Weryfikacja dostępności materiałów pod zlecenie, szybka reakcja na zmiany    
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i> Analiza dostępności maszyn produkcyjnych oraz zasobów ludzkich    
                        </li>
                    </ul>        
                </div>

                <div class="single__case-content mb-60px theme-btb pb-50px">
                    <span class="fontello icon-human-resources case-icon"></span>
                    <h3 class="single__case-title__title mt-30px mb-30px">
                        Analiza kosztów wytworzenia z dokładnością do najmniejszej składowej w każdym zleceniu 
                    </h3>
                </div>

                <h3 class="single__case-title__title">
                    Dodatkowe funkcjonalności:
                </h3>

                <div class="mb-45px"> 
                    <ul class="plan__list mt-45px">
                        <li>
                            <i class="fas fa-check-circle"></i> Planowanie wydania materiałów na produkcję    
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i> Weryfikacja dostępności meteriałów, potrzebnych na produkcji, zmiany rezerwacji, informacja o ewentualnych opóżnieniach dostawy 
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i> Wydanie materiałów zgodnie z planem produkcyjnym      
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i> Pulpit pracownika na produkcji (rejestracja czasu pracy pracownika, reklamacje produkcyjne, przestoje)     
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i> Automatyczne generowanie dokumentów rozchodu materiału i przychodu wyrobu gotowego na podstawie danych z produkcji      
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i> Parametryzacja użyteczności odpadów oraz ewidencja odpadów użytecznych / nieużytecznych      
                        </li>
                    </ul>        
                </div>


            </div><!-- end single__case-content -->
        </div><!-- end single__case -->
 
    </div><!-- end single-content -->

</template>

<script>

    import VueGallerySlideshow from 'vue-gallery-slideshow';
    import SwiperSlider from "../oknoerp/SwiperSlider.vue";

    export default {
        name: "Warehouse",
        components: {
            VueGallerySlideshow,
            SwiperSlider
        },
        data() {
            return {
                images: [
                    {url:'/images/oknoerp/production/zdk.jpg', alt:'Zlecenie produkcyjne'},
                    {url:'/images/oknoerp/production/orders-completion.png', alt:'Potwierdzenie kompletacji'},
                    {url:'/images/oknoerp/production/production-desctop.png', alt:'Pulpit produkcyjny'},
                    {url:'/images/oknoerp/production/gant.png', alt:'Diagram ganta'},
                ]
            }
        }        
    }
</script>

