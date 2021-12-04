<template>
  <div class="app-newsletter">

    <div class="lg-12 app-newsletter--item">
        <input 
            type="checkbox" 
            id="checkbox" 
            v-model="rodoConfirmation"            
            class="app-newsletter--item--checkbox"
            :class="{
            'app-newsletter--item--checkbox--error': is_confirmation_error,
            }"
            @change="$emit('change-confirmation', $event.checked)"        
            >
      <div>
        <p class="app-newsletter--item--text font-color">
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez Axioma DrIT Sp. z o.o. z siedzibą w Krakowie, przy ul. Żmujdzkiej 31/3-4, w celu zorganizowania bezpłatnej prezentacji systemu OknoERP 
        </p>
        <p
          v-show="is_first_checkbox_text_more"
          class="app-newsletter--item--text font-color"
        >
          Oświadczam, iż dane zostały podane dobrowolnie i zapoznałem się z poniższą klauzulą informacyjną oraz pouczeniem dotyczącym prawa dostępu do treści moich danych i możliwości ich poprawienia.
          Jestem świadomy, iż moja zgoda może być w każdym czasie odwołana. Zgodnie z art. 13 ogólnego rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016 r. (Dz. Urz. UE L 119 z 04.05.2016) informuję, iż Administratorem Pana/Pani Danych Osobowych jest - Axioma DrIT spółka z o. o.,
          z siedzibą w Krakowie, ul. Żmujdzka 31/3-4, 31-217 Kraków;
          <ul class="plan__list mt-10px">
              <li>
                  <i class="fas fa-check-circle"></i> z Inspektorem Ochrony Danych osobowych, można się skontaktować pod podanym adresem e-mail dosob@axioma.pl    
              </li>
              <li>
                  <i class="fas fa-check-circle"></i> podane dane osobowe będą przetwarzane w celu zorganizowania bezpłatnej prezentacji systemu 1C na podstawie art. 6 ust. 1 lit. a) ogólnego rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016 r.    
              </li>
              <li>
                  <i class="fas fa-check-circle"></i> Pana/Pani dane osobowe będą przechowywane do momentu odwołania zgody    
              </li>
              <li>
                  <i class="fas fa-check-circle"></i> przysługuje Pani/Panu prawo do żądania od administratora dostępu do danych osobowych, prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo wniesienia sprzeciwu, prawo do cofnięcia zgody    
              </li>
              <li>
                  <i class="fas fa-check-circle"></i> w przypadku stwierdzenia, że przetwarzanie danych osobowych narusza przepisy RODO, osoba której dane dotyczą ma prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych    
              </li>
              <li>
                  <i class="fas fa-check-circle"></i> podanie danych osobowych jest dobrowolne, jednakże niepodanie oznaczonych danych osobowych może skutkować brakiem możliwości umówienia prezentacji    
              </li>
              <li>
                  <i class="fas fa-check-circle"></i> dane osobowe będą przetwarzane także w sposób zautomatyzowany w formie profilowania na podstawie wyrażonej przez użytkownika zgody (na podstawie art. 6 ust. 1 lit. a) RODO). Konsekwencją profilowania będzie otrzymywanie wyselekcjonowanej informacji    
              </li>
          </ul>        
        </p>

        <div class="app-newsletter--item--actions">
          <div
            v-show="!is_first_checkbox_text_more"
            class="app-newsletter--item--action font-color"
            @click="is_first_checkbox_text_more = true"
          >
            Więcej
          </div>

          <div
            v-show="is_first_checkbox_text_more"
            class="app-newsletter--item--action font-color"
            @click="is_first_checkbox_text_more = false"
          >
            Zwiń
          </div>
        </div>
      </div>
    </div>

    <div class="lg-12 app-newsletter--item">
        <input 
            type="checkbox" 
            id="checkbox" 
            v-model="emailMaterialsConfirmation"            
            class="app-newsletter--item--checkbox"
            :class="{
            'app-newsletter--item--checkbox--error': is_confirmation_error,
            }"
            @change="$emit('change-confirmation', $event.checked)"        
            >
      <div>
        <p class="app-newsletter--item--text font-color">
          Zgodnie z ustawą z dnia 18.07.2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. Nr 144, poz.1204 z późn. zm.) wyrażam zgodę na przesyłanie informacji handlowych drogą elektroniczną przez Axioma DrIT sp. z o. o 
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NewsletterCheckboxes",
  props: {
    rodoConfirmation: {
      type: Boolean,
    },
    emailMaterialsConfirmation: {
      type: Boolean,
    },
    is_confirmation_error: {
      type: Boolean,
      default: false,
    },
    is_subscription: {
      type: Boolean,
    },
  },
  data: () => ({
    is_first_checkbox_text_more: false,
  }),
};
</script>

<style lang="scss" scoped>


$black: #363839;
$action-color: #222232;
$lightgray: #9c9e9f;
$gray: #bdc1c6;
$white: #fff;
$green: #222232;

* {
  box-sizing: border-box;
  &::before, &::after {
    box-sizing: border-box;
  }
}

body {
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
//   margin: 0;
//   min-height: 100vh;
}

input[type="checkbox"] {
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  color: $black;
  border: 1px solid $gray;
  border-radius: 4px;
  appearance: none;
  outline: 0;
  cursor: pointer;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  &::before {
    position: absolute;
    content: '';
    display: block;
    top: 2px;
    left: 7px;
    width: 8px;
    height: 14px;
    border-style: solid;
    border-color: $white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    color: $white;
    border-color: $green;
    background: $green;
    &::before {
      opacity: 1;
    }
    ~ label::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
}

label {
  position: relative;
  cursor: pointer;
  font-size: 1em;
//   font-weight: 600;
  padding: 0 0.25em 0;
  user-select: none;
//   &::before {
//     position: absolute;
//     content: attr(data-content);
//     color: $lightgray;
//     clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
//     text-decoration: line-through;
//     text-decoration-thickness: 3px;
//     text-decoration-color: $black;
//     transition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
//   }
}

.app-newsletter {
  &--item {
    display: flex;
    &--actions {
      display: flex;
      justify-content: flex-start;
      margin-left: 40px;
    }
    &--action {
      margin-bottom: 10px;
      cursor: pointer;
      border-bottom: 1px solid currentColor;
    }
    &--text {
      margin-left: 40px;
      margin-bottom: 10px;
      margin-top: 0;
    }
    &--link {
      display: inline-block;
    }
    &--checkbox {
      margin-right: 30px;
    //   &--error {
    //     & /deep/ .ui-checkbox--item {
    //       border: 2px solid $error-color;
    //     }
    //   }
    }
  }
}
.font-color {
   color: $action-color;
}
.link-color {
  color: #007aff;
}
</style>