<template>                                    
    <div class="single-content">
        <div class="avivon-heading">
            <h2 class="avivon__title">Magazyn</h2>
            <p class="avivon__desc mt-30px mb-40px">
                Obsługa wszystkich procesów na magazynie, monitorowanie planowanych dostaw, aplikacja mobilna wspomagająca pracę magazynierów.        
            </p>        
        </div><!-- end avivon-heading -->

        <p class="avivon__desc mt-30px mb-40px">
            Moduł zawiera następujące funkcjonalności:     
        </p>        
        <SwiperSlider :imgArray="images"/>

        <div class="mb-45px"> 
            <ul class="plan__list mt-45px">
                <li>
                    <i class="fas fa-check-circle"></i> Nieograniczona ilość magazynów z dowolną topologią
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Podział magazynu na obszary, strefy, komórki    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Umieszczenie towarów zgodnie z ustawieniami grupy magazynowej     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Magazyn WMS ewidencja materiałowa z dokładnością do komórek magazynowych      
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Ustawienie optymalnej strategii rozmieszczenia pod każdą grupę magazynową     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Parametryzacja etykiet pod każdą grupę materiałową     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Weryfikacja dostawy na urządzeniu mobilnym      
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Możliwość parametryzacji i wydruku etykiet      
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Potwierdzenie ilości oraz jakości dostawy      
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Wydanie materiałów na produkcje zgodnie z aktualnym planem produkcyjnym      
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Wydanie materiałów metodą Kanban      
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Obsługa magazynu odpadów z dokładnością do każdego numeru seryjnego     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Inwentaryzacje cykliczne, inwentaryzacje roczne       
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Aplikacja mobilna i możliwość wykonywania koniecznych operacji magazynowych z poziomu urządzenia mobilnego       
                </li>


            </ul>        
        </div>


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
                    {url:'/images/oknoerp/warehouse/reciept-verification.jpg', alt:'Sprawdzenie przyjęcia'},
                    {url:'/images/oknoerp/warehouse/mobile warehouse.png', alt:'Mobilny interfejs'},
                    {url:'/images/oknoerp/warehouse/materials-transfer-order.png', alt:'Polecenie wydania materiałów'},
                ]
            }
        }        
    }
</script>

