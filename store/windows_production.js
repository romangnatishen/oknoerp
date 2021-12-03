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
        }
    },
  
    getters: {
      moduleNumber(state) {
        return state.module_number;
      }
    },
    
    namespaced: true

  };