<template>                                    
    <div class="single-content">
        <div class="avivon-heading">
            <h2 class="avivon__title">Zaopatrzenie</h2>
            <p class="avivon__desc mt-30px mb-40px">
                Obsługa procesu wykonania zamówień do dostawców, dostosowana do wymagań branży. 
                Zamówienie materiałów z dokładnością do poszczególnych wierszy zlecenia, z uwzględnieniem stanów minimalnych i maksymalnych, elektroniczna wymiana dokumentów, obsługa wielu jednostek miary w trakcie zamówienia (dłużyce, powierzchnie), i wiele innych.       
            </p>        
        </div><!-- end avivon-heading -->

        <p class="avivon__desc mt-30px mb-40px">
            Moduł zawiera następujące funkcjonalności:     
        </p>        

        <div class="mb-45px"> 
            <ul class="plan__list mt-45px">
                <li>
                <i class="fas fa-check-circle"></i> Parametryzacja warunków zakupu z uwzględnieniem zmiennych wymaganych przez dostawcę     
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Dobór dostawców oraz automatyczne generowanie zamówień    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Porównanie cen zakupu    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Rożne schematy przyjęcia towarów od dostawców    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Ustawienie warunków generowania zamówień do dostawców z uwzględnieniem różnych parametrów   
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Korygowanie zamówień do dostawców    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Współpraca modułu zaopatrzenia z innymi modułami wraz z bieżącą informacją o aktualnym stanie magazynowym    
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
                    <i class="fas fa-check-circle"></i> Prowadzenie kartoteki dostawców    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Rozbudowane filtry w trakcie generowania zamówienia do dostawcy (segmenty, rodzaje, grupy materiałowe)    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Definicja kalendarza dostaw dla każdego z kontahentów z uwzględnieniem różnych zmiennych    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Cena zakupu w zamówieniu do dostawcy zgodna z aktualnym cennikiem lub ostatnią ceną zakupu    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Export oraz import cenników dostawcy    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Wieloetapowy proces akceptacji zamówień do dostawców   
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Dostosowane moduły pod zamówienie dłużyc, szyb, panele, płyty PCV (ilość sztuk, powierzchnia)    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Automatyczne przesłanie zamówień do dostawców za pośrednictwem wbudowanego klienta pocztowego    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Rezerwacja materiałów jeszcze niedostarczonych      
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Rezerwacja materiału pod każdy wiersz (wyrób) w zleceniu      
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Możliwość zdefiniowania szablonu zamówienia pod konkretnego dostawcę    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Generowanie plików z zamówieniem w formacie dostawcy (ponad 20 formatów wersji standardowej)   
                </li>
            </ul>        

        </div><!-- end avivon-heading -->

        <div class="avivon-heading mb-50px">        
            <h2 class="avivon__title">Przyjęcie materiałów na stan</h2>
            <ul class="plan__list mt-45px">
                <li>
                    <i class="fas fa-check-circle"></i> Automatyczne wczytywanie faktur elektronicznych na podstawie plików w formacie edytowalnych     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Porównywanie faktury zakupowej z  zamówieniem do dostawcy     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Bieżąca informacja o opóźnieniach dostaw     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Analiza danych o błędach zgłoszonych przy przyjęciu dostawy     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Analiza dat w oparciu o potwierdzenie dostawy w stosunku do daty otrzymania towaru     
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
