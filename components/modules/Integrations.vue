<template>                                    
    <div class="single-content">
        <div class="avivon-heading">
            <h2 class="avivon__title">Integracje z innymi systemami</h2>
                <p class="avivon__desc mt-30px mb-40px">
                    Moduł  zawiera  następne podstawowe funkcjonalności:        
                </p>   

            <div class="single__case-content singlecases__cont mb-70px">
                <span class="fontello icon-exploration case-icon"></span>
                <h3 class="single__case-title__title mt-30px mb-30px">
                    WH Okna, WH Net, WH Planer
                </h3>
                <div class="mb-45px"> 
                    <ul class="plan__list mt-45px">
                        <li>
                            <i class="fas fa-check-circle"></i> Szybka informacja w oparciu o plan produkcyjny o czasie realizacji zlecenia    
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i>	Dostępność i weryfikacja stanu materiałów bieżących i na konkretną datę     
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
                            <i class="fas fa-check-circle"></i> Planowanie produkcji z dokładnością do każdego gniazda produkcyjnego: plan wydania materiałów pod konkretne zlecenie, plan operacyjny pod każde stanowisko      
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i> Weryfikacja dostępności materiałów pod zlecenie    
                        </li>
                         <li>
                            <i class="fas fa-check-circle"></i> Szybka reakcja na powstające zmiany     
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
                            <i class="fas fa-check-circle"></i> Weryfikacja dostępności materiałów potrzebnych na produkcji 
                        </li>
                        <i class="fas fa-check-circle"></i> Zmiany rezerwacji materiału w dowolnym momencie 
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i> Informacja o ewentualnych opóźnieniach dostawy      
                        </li>
                        <i class="fas fa-check-circle"></i> Wydanie materiałów zgodnie z planem produkcyjnym      
                        </li>
                        <li>
                            <i class="fas fa-check-circle"></i> Pulpit pracownika na produkcji (rejestracja czasu pracy pracownika, reklamacje produkcyjne, przestoje      
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

    export default {
        name: "WindowsProduction",
        components: {
            VueGallerySlideshow
        },
        data() {
            return {
                images: [
                'https://placekitten.com/801/800',
                'https://placekitten.com/802/800',
                'https://placekitten.com/803/800',
                'https://placekitten.com/804/800',
                'https://placekitten.com/805/800',
                'https://placekitten.com/806/800',
                'https://placekitten.com/807/800',
                'https://placekitten.com/808/800',
                'https://placekitten.com/809/800',
                'https://placekitten.com/810/800'
                ],
                index: null
        }
        }        
    }
</script>
