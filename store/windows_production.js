import requestDataHandler from '../plugins/requestDataHandler';
import axios from '@/plugins/axios';
import hostSettings from '../plugins/hostSettings';

export default {
    state: () => {
      return {
        module_number: 0
      };
    },
  
    mutations: {
      SET_MODULE_NUMBER(state, payload) {
        state.module_number = payload;
      }
    },
  
    actions: {
      setModuleNumber({ commit }, params ) {
         if (params) {
            commit("SET_MODULE_NUMBER", params.moduleNumber);
         }
        },

        async sendLeadInformation({ commit }, payload) {
          const data = requestDataHandler(
            'POST',
            `${hostSettings.DB_HOST}/crm_lead`,
            payload
          );
          // console.log(`${hostSettings.DB_HOST}/auth`);
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
      }
    },
    
    namespaced: true

  };