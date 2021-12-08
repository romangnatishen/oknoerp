<template>                                    
    <div class="single-content">
        <div class="avivon-heading">
            <h2 class="avivon__title">Moduł reklamacyjny</h2>
            <p class="avivon__desc mt-30px mb-40px">
                Moduł  zawiera  następne podstawowe funkcjonalności:        
            </p>   
            <div class="single__img mb-50px">
                <img src="/images/oknoerp/reclamations/process-map.jpg" alt="Uzgodnienie reklamacji" class="img-single">
            </div>            
            <div class="mb-45px"> 
                <ul class="plan__list mt-45px">
                    <li>
                        <i class="fas fa-check-circle"></i> Rejestracja reklamacji przez portal klienta (połączenie reklamacji z numerem unowy podstawowej, komunikacja z dealerami online, informacje o zmianie statusu, wyniku wykonania )      
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Parametryzacja przebiegu reklamacji w formie procesu biznesowego     
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Połączenie z działem zaopatrzenia online       
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Generowanie zleceń na produkcję na podstawie danych reklamacji      
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Powiązanie modułu reklamacyjnego z modułem transportowym
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Elektroniczna rejestracja i przyporządkowanie faktur za usługi serwisowe do danej umowy.  
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Analiza kosztów reklamacyjnych
                    </li>
                </ul>        
            </div>


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
