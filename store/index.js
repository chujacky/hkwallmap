import axios from 'axios';

export const state = () => ({
  walls: [],
  activeMarker: {},
  newMarker: {},
});

export const mutations = {
  setActiveMarker(state, marker) {
    state.activeMarker = marker;
  },
  setNewMarker(state, marker) {
    state.newMarker = marker;
  },
  setWalls(state, walls) {
    state.walls = walls;
  }
}

export const actions = {
  nuxtServerInit(vuexContext, context) {
    return axios.get('https://hkwallmap.firebaseio.com/walls.json')
    .then(res => {
      const wallsArray = [];
        for (const key in res.data) {
          wallsArray.push({...res.data[key], id: key});
        }
        console.log(wallsArray);
        vuexContext.commit('setWalls', wallsArray);
        vuexContext.commit('setActiveMarker', wallsArray[0]);
      })
  },
}
