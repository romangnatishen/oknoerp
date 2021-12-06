<template>                                    
    <div class="single-content">
        <div class="avivon-heading">
            <h2 class="avivon__title">Portal klienta B2B</h2>
            <p class="avivon__desc mt-30px mb-40px">
                Moduł  zawiera  następne podstawowe funkcjonalności:        
            </p>   
            
            <div class="mb-45px"> 
                <ul class="plan__list mt-45px">
                   
                    <li>
                        <i class="fas fa-check-circle"></i> Możliwość dodawania do zamówienia pozycji dodatków     
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Konfigurator produktu: mechanizm importu ustawień konfiguratora produktu z 1C ERP z możliwością niezależnego wprowadzania zamówień klienta przez portal internetowy z zachowaniem wszystkich reguł       
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Integracja z systemem 1C ERP, poprzez odczyt Informacji o produktach, podziału kategorii, opisów, zdjęć, informacji o statusie zamówienia, wydaniu z magazynu, wysyłce       
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Wielojęzykowość i wielo-walutowość: portal obsługuje wiele języków oraz walut
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Ceny i rabaty: Pobieranie cen z systemu ERP (ceny, katalogowe, ceny grupowe, ceny indywidualne)  
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Moduł reklamacyjny (RMA): Obsługa procesu reklamacji poprzez dedykowany moduł w panelu klienta
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Możliwość wielopoziomowego nadawania użytkownikom uprawnień – do całych funkcjonalności, jak i ich pojedynczych elementów
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
