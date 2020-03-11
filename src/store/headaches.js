const state = {
  headaches: [ ]
};
  
const getters = {
  
};

const mutations = {
  
};

const actions = {
  addToList({ state }, headache){
    state.headaches.push(headache);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};