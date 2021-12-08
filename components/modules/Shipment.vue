<template>                                    
    <div class="single-content">
        <div class="avivon-heading">
            <h2 class="avivon__title">Wysyłka wyrobów gotowych</h2>
            <p class="avivon__desc mt-30px mb-40px">
                Moduł logistyczny zawiera  następne podstawowe funkcjonalność        
            </p>   
            <div class="single__img mb-50px">
                <img src="/images/oknoerp/logistic/shipment-plan.png" alt="Plan wysyłki" class="img-single">
            </div><!-- end single__img -->

            <div class="mb-45px"> 
                <ul class="plan__list mt-45px">
                    <li>
                        <i class="fas fa-check-circle"></i> Rozbudowany mechanizm do planowania wyjazdów (Dzień, kierunek, grupa klientów, własny samochód lub zamówienie na transport)    
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Możliwość zaplanowanie wysyłki wyrobów gotowych, dodatków, elementów reklamacyjnych.     
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Przygotowanie do wysyłki wyrobów gotowych, dodatków.      
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Dodatkowa kontrola jakości przed wysyłką (w tym na urzadzeniu mobilnym)      
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Ewidencja stojaków wydanych do klienta  
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Wydruk listy załadunkowej, CRM  
                    </li>
                    <li>
                        <i class="fas fa-check-circle"></i> Wydanie wyrobów za pomocą skanera / urządzenia mobilnego  
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
