<template>                                    
    <div class="single-content">
        <div class="avivon-heading">
            <h2 class="avivon__title">Sprzedaż</h2>            
            <p class="avivon__desc mt-30px mb-40px">
                Kompleksowa obsługa procesu sprzedaży zaczynając od wystawienia ofert, umów oraz zamówień klientów. <br> 
                W przypadku pracy w zewnętrznym konfiguratorze produktów system zaczytuje wszystkie dane niezbędne do obsługi całego procesu sprzedaży, w tym danych do obsługi procesu produkcji i zamawiania materiałów do danej umowy  
            </p>
          <SwiperSlider :imgArray="images"/>
        </div><!-- end avivon-heading -->

        <div class="mb-45px"> 
            <ul class="plan__list mt-45px">
                <li>
                <i class="fas fa-check-circle"></i> Proces uzgodnienia i decyzyjności w sprawie zlecenia ustalone wewnątrz firmy na podstawie: statusów, poziomów dostępu, warunków akceptacji np. weryfikacja działu technicznego, procent wpłaconej zaliczki, zaległości w płatnościach    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Parametryzacji zlecenia według potrzeb: dodatkowe parametry handlowe oraz technologiczne technologiczne 
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Możliwość dodania do zlecenia dodatkowych pozycji handlowych 
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Rozbudowany mechanizm do konfiguracji rabatów, dopłat, skonta, prowizji dla dealerów, rabatów dodatkowych  
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Parametryzacja poziomów dostępu dla użytkowników na poszczególne typy rabatów w systemie, ograniczenie wysokości udzielanych rabatów  
                </li>
                <li>
                <li>
                <i class="fas fa-check-circle"></i> Automatyczne obliczenie daty realizacji oraz daty odbioru zlecenia  
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Automatyzacja procesu sprzedaży w spółkach powiązanych   
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Ograniczenie uprawnień dostępu dla poszczególnych biur handlowych    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Historia wykonanych zmian w zleceniu z dokładnością do każdego atrybutu  
                </li>
            </ul>        

        </div>

        <div class="avivon-heading mb-50px">        
            <h2 class="avivon__title">Dokumenty handlowe</h2>
            <ul class="plan__list mt-45px">
                <li>
                    <i class="fas fa-check-circle"></i> Automatyczne wystawianie wszystkich niezbędnych dokumentów w ramach jednego systemu: faktura zaliczkowa, faktura sprzedażowa, protokół odbioru, protokół wydania, WZ, CMR, inne    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Generator faktur zaliczkowych    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Odbiory częściowe umów poprzez wybranie kilku pozycji zlecenia    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Wbudowany klient pocztowy: możliwość wysyłki dokumentów handlowych bezpośrednio z systemu    
                </li>
            </ul>        

        </div><!-- end avivon-heading -->

        <div class="avivon-heading mb-50px">        
            <h2 class="avivon__title">Wydanie zleceń</h2>
            <ul class="plan__list mt-45px">
                <li>
                    <i class="fas fa-check-circle"></i> Wydanie zleceń na podstawie informacji o zakończeniu produkcji     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Weryfikacja płatności, elastyczność w podejmowaniu decyzji  np. w przypadku braku wpłaty możliwość odblokowania wysyłki dla użytkowników z odpowiednim poziomem uprawnień     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Parametryzacja dodatkowych warunków blokady wydania umów z poziomu użytkownika     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Wysyłka powiadomień o konieczności uregulowania płatności drogą e-mailową lub za pośrednictwem SMS     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Analiza wysokości kredytu kupieckiego na etapie wydawania umów dla wybranych kontrahentów     
                </li>
            </ul>        

        </div><!-- end avivon-heading -->

        <div class="avivon-heading">        
            <h2 class="avivon__title">Umowy montażowe</h2>
            <ul class="plan__list mt-45px">
                <li>
                    <i class="fas fa-check-circle"></i> Formularz montażu zgodny ze specyfikacją w oparciu o normy zakładowe    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Różne stawki VAT w zleceniu zgodne z obowiązującymi przepisami     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Prowadzenie kalendarza ekip montażowych z dokładnością do biura handlowego, poszczególnej ekipy, poszukiwanie możliwości wykonania prac interwencyjnych    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Inwestycje; możliwość prowadzenia stanu magazynowego podczas trwania projektu inwestycyjnego    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Raporty dzienne ekip montażowych za pośrednictwem urządzenia mobilnego    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Rozliczenie wyjazdu montażowego    
                </li>                
            </ul>        

        </div><!-- end avivon-heading -->

        <div class="avivon-heading mb-50px">        
            <h2 class="avivon__title">Analiza wynikowa</h2>
            <ul class="plan__list mt-45px">
                <li>
                    <i class="fas fa-check-circle"></i> Analiza płatności Kontarhenta w wybranym czasookresie     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Zbiorcze podsumowanie ilości i wartości zleceń przychodzących z podziałem na Kontrahenta i poszczególne kanały dystrybucji w danym okresie    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Analiza Kontrahenta pod kątem ilości umów do złożonych ilości reklamacji i przedmiotu reklamacji w czasookresie     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Analiza kosztów transportu z podziałem na Kontrahenta     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Zestawienia porównawcze w różnym okresie z podziałem: lat/miesięcy/kwartałów     
                </li>
            </ul>        
        </div><!-- end avivon-heading -->


    </div><!-- end single-content -->

</template>


<script>

    import VueGallerySlideshow from 'vue-gallery-slideshow';
    import SwiperSlider from "../oknoerp/SwiperSlider.vue";

    export default {
        name: "WindowsProduction",
        components: {
            VueGallerySlideshow,
            SwiperSlider
        },
        data() {
            return {
                images: [
                    {url:'/images/oknoerp/sales/main-interface.png', alt:'Pulpit główny'},
                    {url:'/images/oknoerp/sales/sales-order.png', alt:'Zamówienie klienta'},
                    {url:'/images/oknoerp/sales/zdk.png', alt:'Zlecenie produkcyjne'},
                    {url:'/images/oknoerp/sales/characteristics.jpg', alt:'Cechy wyrobu gotowego'},
                    {url:'/images/oknoerp/sales/margin-analize.png', alt:'Analiza marży'}                     
                ]
            }
        }        
    }
</script>

