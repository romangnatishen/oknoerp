<template>
  <div>
    <NavBar />
    <!-- <Slider /> -->
    <section class="single-area responsive-content area-padding mt-80px">
      <div class="service-fluid">
        <div class="container">
          <div class="row">          
            <div class="col-md-8">
              <GeneralInfo v-show="currentModuleNumber===0"/>              
              <SalesDepartment v-show="currentModuleNumber===1"/>
              <PurchasingDepartment v-show="currentModuleNumber===2"/>
              <Warehouse v-show="currentModuleNumber===3"/>
              <Production v-show="currentModuleNumber===4"/>
              <Shipment v-show="currentModuleNumber===5"/>
              <Reclamations v-show="currentModuleNumber===6"/>          
              <PortalB2B v-show="currentModuleNumber===7"/>          
              <Integrations v-show="currentModuleNumber===0.5"/>
            </div>
            <div class="col-md-4">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </section>
    <CallToAction />    
    <Footer />
  </div>
</template>
<script>
import NavBar from "../components/oknoerp/Nav.vue";

import Slider from "../components/modules/Slider";
import SideBar from "../components/modules/SideBar";
import GeneralInfo from "../components/modules/GeneralInfo";
import SalesDepartment from "../components/modules/SalesDepartment";
import PurchasingDepartment from "../components/modules/PurchasingDepartment";
import Warehouse from "../components/modules/Warehouse.vue";
import Production from "../components/modules/Production.vue";
import Shipment from "../components/modules/Shipment.vue";
import Reclamations from "../components/modules/Reclamations.vue";
import PortalB2B from "../components/modules/PortalB2B.vue";
import Integrations from "../components/modules/Integrations.vue";

import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default {
  components: {
    NavBar,
    GeneralInfo,
    SalesDepartment,
    PurchasingDepartment,        
    Warehouse,
    Production,  
    Shipment,
    Reclamations,
    PortalB2B,
    Integrations,
    Footer,
    CallToAction,
    Slider,
    SideBar
  },

  data() {
    return {
      moduleNumber: 0
    };
  },

  head() {
    return {
      title: "Axioma | OknoERP"
    };
  },
  computed: {

    currentModuleNumber() {
      return this.$store.getters['windows_production/moduleNumber'];
    },
  },
  mounted() {
    //accordion
    new Accordion(".accordion-container");
  }
};
</script>
