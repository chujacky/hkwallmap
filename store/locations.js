export const state = () => ({
  list: [
    { 
      name: 'Tsuen Wan West Sports Centre',
      position: { lat: 22.37008, lng: 114.10033 },
      meta: {
        trouble: 'low chances of getting into troublelow chances of getting into trouble',
        time: 'anytime except rainstorm lol, didn\'t try at night but it should be well lit at night.',
        space: 'enough space for you to roll, wide and high.',
        ballSafety: 'throwing into the holes of the car park behind/in front of you (depends which side of wall you choose)',
        transport: 'Bus Terminal (Bayview Garden)'
      }
    },
    { 
      name: 'Blake’s Garden soccer court',
      position: { lat: 22.28427, lng: 114.14838 },
      meta: {
        trouble: 'Need to avoid soccer games in evening but usually free weekday mornings or after 9 at night',
        time: 'Weekdays or maybe early on weekends',
        space: 'It’s not a proper wall, I actually throw against the giant steps that are used as the bleachers for the main lower soccer court',
        ballSafety: 'only lost ball when shooting at full power bc ball bounced up behind me and over the high fence but it’s fine if you’re not shooting too hard',
        transport: 'Sheung wan MTR and walk uphill to Po Hing Fon'
      }
    },
    { 
      name: 'Happy Valley Wall',
      position: { lat: 22.27269, lng: 114.18242},
      meta: {
        trouble: 'Security guards are there on weekdays. No passersby except people who work in the colosseum time to time',
        time: 'Anytime is similar',
        space: 'lots of usable space around the wall, wall is only about 20 feet wide though',
        ballSafety: 'Very little chance of losing the ball - full field behind you',
        transport: ''
      }
    },
    { 
      name: 'Hung Hom : HK Coliseum 1',
      position: { lat: 22.3010488, lng: 114.18209 },
      meta: {
        trouble: 'Security guards are there on weekdays. No passersby except people who work in the colosseum time to time',
        time: 'Weekends anytime, Do not use on weekdays',
        space: 'Spacious, can even pass but wall is low',
        ballSafety: 'Close to 0 but can bounce to weird places',
        transport: 'Hung Hom MTR or Cross-Harbour tunnel bus stop'
      }
    },
    { 
      name: 'Hung Hom : HK Coliseum 2',
      position: { lat: 22.30104, lng: 114.18196 },
      meta: {
        trouble: 'Security guards are there on weekdays. No passersby except people who work in the colosseum time to time',
        time: 'Weekends anytime, Do not use on weekdays',
        space: 'Spacious, can even pass but wall is low',
        ballSafety: 'Close to 0 but can bounce to weird places',
        transport: 'Hung Hom MTR or Cross-Harbour tunnel bus stop'
      }
    },
    { 
      name: 'Flint Road',
      position: { lat: 22.32859, lng: 114.18116 },
      meta: {
        trouble: 'Random people walk by. so far not being troubled by the guard of the kindergarden school',
        time: 'with daylight, as the lights were blocked by the untrimmed trees',
        space: 'Two people can do wall ball at the same time',
        ballSafety: 'it\'s a slope all the way to La Salle Road. wall is not really high so if the ball was flipped',
        transport: 'Drive, buy a house nearby and walk'
      }
    },
  ],
  activeMarker: null,
});

export const mutations = {
  setActiveMarker(state, marker) {
    state.activeMarker = marker;
  }
}