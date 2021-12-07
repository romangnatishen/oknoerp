import requestDataHandler from '../plugins/requestDataHandler';
import axios from '@/plugins/axios';
import hostSettings from '../plugins/hostSettings';

export default {
    state: () => {
      return {
        module_number: 0,
        firstAgreement: false,
        secondAgreement: false,

      };
    },
  
    mutations: {
      SET_MODULE_NUMBER(state, payload) {
        state.module_number = payload;
      },
      SET_FIRST_AGREEMENT(state, payload) {
        state.firstAgreement = payload;
      },
      SET_SECOND_AGREEMENT(state, payload) {
        state.secondAgreement = payload;
      }      
    },
  
    actions: {
      setModuleNumber({ commit }, params ) { 
        if (params) {           
            commit("SET_MODULE_NUMBER", params.moduleNumber);
         }
        },

        setFirstAgreement({ commit }, params ) {
          console.log('params on first agreement ',params);
          if (params) {            
             commit("SET_FIRST_AGREEMENT", params.firstAgreement);
          }
         },

         setSecondAgreement({ commit }, params ) {
          if (params) {
             commit("SET_SECOND_AGREEMENT", params.secondAgreement);
          }
         },
 
        async sendLeadInformation({ commit }, payload) {
          const data = requestDataHandler(
            'POST',
            `${hostSettings.DB_HOST}/crm_lead`,
            payload
          );
          
          const resLogin = await axios(data).catch((err) => {
            console.log(err);
            return false;
          });
          return resLogin;
        },
    
    
    },
  
    getters: {
      moduleNumber(state) {
        return state.module_number;
      },
      firstAgreement(state) {
        return state.firstAgreement;
      },
      secondAgreement(state) {
        return state.secondAgreement;
      }
    },
    
    namespaced: true

  };