<template>                                    
    <div class="single-content">
        <div class="avivon-heading">
            <h2 class="avivon__title">Sprzedaż</h2>            
            <p class="avivon__desc mt-30px mb-40px">
                Kompleksowa obsługa procesu sprzedaży zaczynając od wystawienia ofert, umów, zamówień klientów. <br> 
                W razie wykorzystania zewnętrznego konfiguratora produktów system zaczytuje wszystkie dane niezbędne do obsługi całego procesu sprzedaży, w tym danych do obsługi procesu produckcji i zamawiania materiałów do danej umowy.  
            </p>
            <SwiperSlider :imgArray="images"/>
        </div><!-- end avivon-heading -->

        <div class="mb-45px"> 
            <ul class="plan__list mt-45px">
                <li>
                <i class="fas fa-check-circle"></i> Proces uzgodnienia zlecenia wewnątrz firmy: statusy, poziomy dostępu, warunki akceptacji (weryfikacja działu technicznego, % wpłaconej zaliczki, zaległość za poprzednie zlecenia, ...)    
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Pozycje zlecenia, ilość, wartość, dodatkowe parametry handlowe / technologiczne 
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Możliwość dodania do zlecenia dodatkowych pozycji handlowych 
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Rozbudowany mechanizm do parametryzacji rabatów, dopłat, skonta, prowizji dla dealerów  
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Parametryzacja poziomów dostępu dla użytkowników na poszczególne typy rabatów w systemie, organiczenie wysokości udzielanych rabatów  
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Moduł do parametryzacji rabatów, dopłat, prowizji dla dealera  
                </li>
                <li>
                <i class="fas fa-check-circle"></i> Obliczenie daty realizacji, daty odbioru zlecenia  
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
                    <i class="fas fa-check-circle"></i> Automatyczne wystawianie wszystkich niezbędnych dokumentów w ramach systemu: faktura, faktura zaliczkowa, protokół odbioru, protokół wydania, WZ, CMR, inne.    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Generator faktur zaliczkowych    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Odbiory częściowe umów poprzez wybranie kilku pozycji zlecenia    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Wbudowany klient pocztowy, możliwość wysyłki dokumentów handlowych bezpośrednio z systemu    
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
                    <i class="fas fa-check-circle"></i> Kontrola wykonania opłaty za zlecenie, w przypadku braku wpłaty możliwość odblokowania wysyłki dla użytkowników z odpowiednim poziomem uprawnień     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Parametryzacja dodatkowych warunków blokady wydania umów z poziomu użytkownika     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Wysyłka upomnień o braku wpłaty drogą mailową lub SMSem      
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
                    <i class="fas fa-check-circle"></i> Formularz montażu w oparciu o załozone ceny jednostkowe i pracochłonności okreslonych czynności, dobór materiaów montazowych, pracowników    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Stawki VAT w zleceniu zgodnie z wymaganiami    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Prowadzenie kalendarza ekip montażowych z dokładnością do biura handlowego, poszczególnej ekipy, poszukiwanie możliwości wykonania prac interwencyjnych    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Prowadzenie magazynu na placu "budowy"    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Raporty dzienne ekip montażowych za pomocą urządzenia mobilnego    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Rozlicenie wyjazdu montażowego    
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
                    <i class="fas fa-check-circle"></i> Zbiorcze podsumowanie ilości i wartości zleceń przychodzących w danym okresie z podziałem na Kontrahenta i poszczególne kanały dystrybucji    
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Analiza Kontrahenta pod kątem ilości umów do złożonych ilości reklamacji i przedmiotu reklamacji za okres     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Analiza kosztów transportu z pdoziałem na Kontrahenta     
                </li>
                <li>
                    <i class="fas fa-check-circle"></i> Zestawienia porówanawcze dla lat/miesięcy/kwartałów     
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
                    {url:'/images/oknoerp/sales/pozycja.jpg', alt:'Kartoteka pozycji'},
                    {url:'/images/oknoerp/sales/DocImport.jpg', alt:'Import dokumentów od odstawcy'},
                    {url:'/images/oknoerp/sales/Charakterystyki.jpg', alt:'Dodatkowe cechy wyrobu gotowego'} 
                ]
            }
        }        
    }
</script>
