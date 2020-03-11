const state = {
  headaches: [
  {
    startDate: '20/02/2019',
    endDate: '21/02/2019',
    intensity: 'Strong',
    medicines: [{
      name: 'oki',
      effective: true
    },
    {
      name: 'tachipirina',
      effective: false
    }
  ]}
  ]
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