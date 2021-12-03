import Vuex from 'vuex';
import windows_production from './windows_production';


const modules = {
    windows_production
};


const store = () => {
    return new Vuex.Store({
        modules
      });
  };
  
export default store;
