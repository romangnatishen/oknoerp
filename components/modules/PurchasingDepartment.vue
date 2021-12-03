<template>                                    
    <div class="single-content">
        <div class="avivon-heading">
            <h2 class="avivon__title">Zaopatrzenie</h2>
            <p class="avivon__desc mt-30px mb-40px">
                Obsługa procesu wykonania zamówień do dostawców, dostowowana do wymagań branży. 
                Zamówienie materiałów z dokładnością do poszczególnych wierszy zlecenia, mini-max, elektroniczna wymiana dokumentów, obsługa wielu jednostek miary w trakcie zamówienia (dłużyce, powierzchnie), i wiele innych .       
            </p>        
        </div><!-- end avivon-heading -->

        <div class="single__img mb-50px">
            <img src="/images/sales/sales order.jpg" alt="Zamówienie klienta" class="img-single" @click="index = 1">
            <div class="shared__date-item">
                <span>Zobacz więcej >></span>
            </div><!-- end shared__date-item -->

            <client-only placeholder="Loading...">
            <VueGallerySlideshow :images="images" :index="index" @close="index = null" />
            </client-only>
        </div><!-- end single__img -->

        <p class="avivon__desc mt-30px mb-40px">
            Moduł zawiera następujące funkcjonalności:     
        </p>        

        <div class="mb-45px"> 
            <ul class="plan__list mt-45px">
                <li>
                <i class="fas fa-check-circle"></i> Parametryzacja warunków zakupu    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Dobór dostawców oraz automatyczne generowanie zamówień    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Porównanie cen zakupu    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Rożne schematy przyjęcia towarów od dostawców, ustawienie warunków generowania zamówień do dostawców (pod zamówienie, mini-max)    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Korygowanie zamówień do dostawców    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Współpraca modułu zaopatrzenia z innymi modułami (na bieżąco informacja dla produkcji o ewentualnych opóźnieniach)    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Analiza harmonogramu dostaw    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Analiza niezgodności w zaopatrzeniu, zwroty do dostawców    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Analizy pod względem obrotów ilościowym i wartościowym w podziale na dostawców, artykuły i miesiące    
                </li>
            </ul>        
        </div>

        <div class="avivon-heading mb-50px">        
            <h2 class="avivon__title">Generowanie zamówień do dostawców</h2>
            <ul class="plan__list mt-45px">
                <li>
                    <i class="fas fa-check-circle"></i> Prowadzenie kartoteki dostawców (kody dostawców, jednostki miary, ilość w opakowaniu, minimalna ilość dostawy)    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Rozbudowane filtry w trakcie generowania zamówienia do dostawcy (segmenty, rodzaje, grupy materiałowe)    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Możliwość zdefiniowania kalendarza dostawcy (w jakie dni są wykonywane dostawy, święta dni wolne dla dostawców zagranicznych)    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Wartość w zamówieniu zgodnie z aktualnym cennikiem lub ostatnią ceną zakupu    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Export import cenników dostawcy    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Wieloetapowy proces akceptacji zamówień do dostawców    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Dostosowane moduły pod zamówienie dłużyc, szyb, panele, płyty PCV (ilość sztuk, powierzchnia)    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Automatyczne przesłanie zamówień do dostawców (wbudowany klient pocztowy)    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Przerezerwowanie materiałów w drodze (materiał zamówiony z nadwyżką w poptzednim zamówieniu system przerezerwuje pod następne zlecenia)    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Możliwość zdefiniowania szablonu zamówienia pod konkretnego dostawcę    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Generowanie plików z zamówieniem w formacie dostawcy (ponad 20 formatów wersji pudełkowej)    
                </li>
            </ul>        

        </div><!-- end avivon-heading -->

        <div class="avivon-heading mb-50px">        
            <h2 class="avivon__title">Przyjęcie materiałów na stan</h2>
            <ul class="plan__list mt-45px">
                <li>
                    <i class="fas fa-check-circle"></i> Automatyczne wczytywanie faktur elektronicznych i porównywanie ich z zamówieniem     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Informacją na bieżąco o opóźnieniach dostaw     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Snaliza danych o błedach zgłoszonych na przyjęciu materiałów     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Analiza daty wymaganej/ potwierdzonej do daty otrzymania towaru     
                </li>                
            </ul>        

        </div><!-- end avivon-heading -->

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
