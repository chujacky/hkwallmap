<template>
  <div v-if="width">
    <transition name="fade">
      <div class="marker-meta-wrapper box" :key="marker.id">
        <div class="marker-content">
          <font-awesome-icon :icon="['fas', 'times']" @click="close" />
          <div class="marker-meta">
            <div class="meta-item image-wraper">
              <figure class="image is-16by9">
                <img :src="marker.imageUrl" v-if="marker.imageUrl" />
                <img class="add-button" src="/placeholder.png" v-else />
              </figure>
            </div>
            <div class="wall-no-wrapper">
              <div class="wall-no">
                #{{marker.no}}
              </div>
            </div>
            <h2 class="title">{{ marker.name }}</h2>
            <div class="safety-notes meta-item">
              <p class="has-text-weight-semibold meta-title mb-1">
                Trouble/Passby
              </p>
              <div class="scales-wrapper" v-if="marker.trouble">
                <scale-item
                  v-for="scale in scales.trouble"
                  :key="scale.slug"
                  :value="marker.trouble"
                  :scale="scale"
                ></scale-item>
              </div>
              <div class="no-info" v-else>N/A - Let us know!</div>
            </div>
            <div class="time-notes meta-item">
              <p class="has-text-weight-semibold meta-title mb-1">Timing</p>
              <div class="scales-wrapper" v-if="marker.hasOwnProperty('timing')">
                <scale-item
                  v-for="scale in scales.timing"
                  :key="scale.slug"
                  :value="marker.timing"
                  :scale="scale"
                ></scale-item>
              </div>
              <div class="no-info" v-else>N/A - Let us know!</div>
            </div>
            <div class="space-notes meta-item">
              <p class="has-text-weight-semibold meta-title mb-1">Space</p>
              <div class="scales-wrapper" v-if="marker.space">
                <scale-item
                  v-for="scale in scales.space"
                  :value="marker.space"
                  :key="scale.slug"
                  :scale="scale"
                ></scale-item>
              </div>
              <div class="no-info" v-else>N/A - Let us know!</div>
            </div>
            <div class="ball-safety-notes meta-item">
              <p class="has-text-weight-semibold meta-title mb-1">
                Chance of losing ball
              </p>
              <div class="scales-wrapper" v-if="marker.ballSafety">
                <scale-item
                  v-for="scale in scales.ballSafety"
                  :value="marker.ballSafety"
                  :key="scale.slug"
                  :scale="scale"
                ></scale-item>
              </div>
              <div class="no-info" v-else>N/A - Let us know!</div>
            </div>
            <div class="accessibility-notes meta-item">
              <p class="has-text-weight-semibold meta-title mb-1">
                Accessibility
              </p>
              <div class="scales-wrapper" v-if="marker.accessibility">
                <scale-item
                  v-for="scale in scales.accessibility"
                  :value="marker.accessibility"
                  :key="scale.slug"
                  :scale="scale"
                ></scale-item>
              </div>
              <div class="no-info" v-else>N/A - Let us know!</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <div v-else>
    <div class="marker-meta-wrapper box">
      <div class="marker-content">
        <font-awesome-icon :icon="['fas', 'times']" @click="close" />
        <div class="marker-meta">
          <div class="meta-item image-wraper">
            <figure class="image is-16by9">
              <img :src="marker.imageUrl" v-if="marker.imageUrl" />
              <img class="add-button" src="/placeholder.png" v-else />
            </figure>
          </div>
          <div class="wall-no-wrapper">
              <div class="wall-no">
                #{{marker.no}}
              </div>
            </div>
          <h2 class="title">{{ marker.name }}</h2>
          <div class="safety-notes meta-item">
            <p class="has-text-weight-semibold meta-title mb-1">
              Trouble/Passby
            </p>
            <div class="scales-wrapper" v-if="marker.trouble">
              <scale-item
                v-for="scale in scales.trouble"
                :key="scale.slug"
                :value="marker.trouble"
                :scale="scale"
              ></scale-item>
            </div>
            <div class="no-info" v-else>N/A - Let us know!</div>
          </div>
          <div class="time-notes meta-item">
            <p class="has-text-weight-semibold meta-title mb-1">Timing</p>
            <div class="scales-wrapper" v-if="marker.hasOwnProperty('timing')">
              <scale-item
                v-for="scale in scales.timing"
                :key="scale.slug"
                :value="marker.timing"
                :scale="scale"
              ></scale-item>
            </div>
            <div class="no-info" v-else>N/A - Let us know!</div>
          </div>
          <div class="space-notes meta-item">
            <p class="has-text-weight-semibold meta-title mb-1">Space</p>
            <div class="scales-wrapper" v-if="marker.space">
              <scale-item
                v-for="scale in scales.space"
                :value="marker.space"
                :key="scale.slug"
                :scale="scale"
              ></scale-item>
            </div>
            <div class="no-info" v-else>N/A - Let us know!</div>
          </div>
          <div class="ball-safety-notes meta-item">
            <p class="has-text-weight-semibold meta-title mb-1">
              Chance of losing ball
            </p>
            <div class="scales-wrapper" v-if="marker.ballSafety">
              <scale-item
                v-for="scale in scales.ballSafety"
                :value="marker.ballSafety"
                :key="scale.slug"
                :scale="scale"
              ></scale-item>
            </div>
            <div class="no-info" v-else>N/A - Let us know!</div>
          </div>
          <div class="accessibility-notes meta-item">
            <p class="has-text-weight-semibold meta-title mb-1">
              Accessibility
            </p>
            <div class="scales-wrapper" v-if="marker.accessibility">
              <scale-item
                v-for="scale in scales.accessibility"
                :value="marker.accessibility"
                :key="scale.slug"
                :scale="scale"
              ></scale-item>
            </div>
            <div class="no-info" v-else>N/A - Let us know!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScaleItem from "./ScaleItem";

export default {
  name: "marker-item",
  components: {
    ScaleItem
  },
  data() {
    return {
      width: window.innerWidth > 768,
      scales: {
        trouble: [
          {
            slug: "none",
            value: "None"
          },
          {
            slug: "little",
            value: "Little"
          },
          {
            slug: "fair",
            value: "Fair"
          },
          {
            slug: "alot",
            value: "A lot"
          }
        ],
        timing: [
          {
            slug: "weekday",
            value: "Weekday"
          },
          {
            slug: "weekend",
            value: "Weekend"
          },
          {
            slug: "morning",
            value: "Morning"
          },
          {
            slug: "afternoon",
            value: "Afternoon"
          },
          {
            slug: "evening",
            value: "Evening"
          }
        ],
        space: [
          {
            slug: "little",
            value: "Little"
          },
          {
            slug: "fair",
            value: "Fair"
          },
          {
            slug: "plenty",
            value: "Plenty"
          }
        ],
        ballSafety: [
          {
            slug: "low",
            value: "Low"
          },
          {
            slug: "fair",
            value: "Fair"
          },
          {
            slug: "high",
            value: "High"
          }
        ],
        accessibility: [
          {
            slug: "easy",
            value: "Easy"
          },
          {
            slug: "hassle",
            value: "Hassle"
          },
          {
            slug: "fair",
            value: "Fair"
          }
        ]
      }
    };
  },
  computed: {
    marker() {
      return this.$store.state.activeMarker;
    }
  },
  methods: {
    open() {
      this.$el.querySelector('.marker-meta-wrapper').classList.add("active");
    },
    close() {
      this.$el.querySelector('.marker-meta-wrapper').classList.remove("active");
    }
  },
  mounted() {
    this.$root.$on("open", () => {
      if (this.isDesktop) {
        return;
      }
      this.open();
    });

    this.isDesktop = window.innerWidth > 768;
  }
};
</script>
