<template>
  <form @submit="handleForm">
    <div class="map-details-wrapper active">
      <div class="row">
        <div class="field search-field">
          <search></search>
        </div>
        <div class="field">
        <label class="label">Region <span class="error" v-show="errors.region">*required</span></label>
        <div class="control">
          <div class="select is-small">
            <select v-model="region">
              <option disabled>Select dropdown</option>
              <option value="hk">HK Island</option>
              <option value="kln">Kowloon</option>
              <option value="nt">New Territories</option>
            </select>
          </div>
        </div>
      </div>
      </div>
      <div class="field">
        <label class="label">Name of Wall <span class="error" v-show="errors.name">*required</span></label>
        <input class="input is-small" type="text" v-model="name" placeholder="E.g. Stanley Ho Pitch 1" requried />
      </div>
      <div class="field">
        <label class="label">Trouble/Passer-by <span class="error" v-show="errors.trouble">*required</span></label>
        <div class="checkbox-wrapper">
          <input
            id="troubleNone"
            name="Trouble/Passer-by"
            type="radio"
            class="choice"
            value="none"
            v-model="trouble"
          />
          <label for="troubleNone" class="checkbox">
            None </label
          ><input
            id="troubleLittle"
            name="Trouble/Passer-by"
            type="radio"
            class="choice"
            value="little"
            v-model="trouble"
          />
          <label for="troubleLittle" class="checkbox">
            Little </label
          ><input
            id="troubleFair"
            name="Trouble/Passer-by"
            type="radio"
            class="choice"
            value="fair"
            v-model="trouble"
          />
          <label for="troubleFair" class="checkbox">
            Fair </label
          ><input
            id="troubleAlot"
            name="Trouble/Passer-by"
            type="radio"
            class="choice"
            value="alot"
            v-model="trouble"
          />
          <label for="troubleAlot" class="checkbox">
            A lot
          </label>
        </div>
      </div>
      <div class="field">
        <label class="label">Timing (Select all applicable) <span class="error" v-show="errors.timing">*required</span></label>
        <div class="checkbox-wrapper">
          <input
            id="timingWeekday"
            name="Timing (Select all applicable)"
            type="checkbox"
            class="choice"
            value="weekday"
            v-model="timing"
          />
          <label for="timingWeekday" class="checkbox">
            Weekday </label
          ><input
            id="timingWeekend"
            name="Timing (Select all applicable)"
            type="checkbox"
            class="choice"
            value="weekend"
            v-model="timing"
          />
          <label for="timingWeekend" class="checkbox">
            Weekend </label
          ><input
            id="timingMorning"
            name="Timing (Select all applicable)"
            type="checkbox"
            class="choice"
            value="morning"
            v-model="timing"
          />
          <label for="timingMorning" class="checkbox">
            Morning </label
          ><input
            id="timingAfternoon"
            name="Timing (Select all applicable)"
            type="checkbox"
            class="choice"
            value="afternoon"
            v-model="timing"
          />
          <label for="timingAfternoon" class="checkbox">
            Afternoon </label
          ><input
            id="timingEvening"
            name="Timing (Select all applicable)"
            type="checkbox"
            class="choice"
            value="evening"
            v-model="timing"
          />
          <label for="timingEvening" class="checkbox">
            Evening
          </label>
        </div>
      </div>
      <div class="field">
        <label class="label">Space <span class="error" v-show="errors.space">*required</span></label>
        <div class="checkbox-wrapper">
          <input
            id="spaceLittle"
            name="Space"
            type="radio"
            class="choice"
            value="little"
            v-model="space"
          />
          <label for="spaceLittle" class="checkbox">
            Little </label
          ><input
            id="spaceFair"
            name="Space"
            type="radio"
            class="choice"
            value="fair"
            v-model="space"
          />
          <label for="spaceFair" class="checkbox">
            Fair </label
          ><input
            id="spaceSpacious"
            name="Space"
            type="radio"
            class="choice"
            value="plenty"
            v-model="space"
          />
          <label for="spaceSpacious" class="checkbox">
            Plenty
          </label>
        </div>
      </div>
      <div class="field">
        <label class="label">Chance of losing balls <span class="error" v-show="errors.ballSafety">*required</span></label>
        <div class="checkbox-wrapper">
          <input
            id="ballSafetyLow"
            name="Chance of losing balls"
            type="radio"
            class="choice"
            value="low"
            v-model="ballSafety"
          />
          <label for="ballSafetyLow" class="checkbox">
            Low </label
          ><input
            id="ballSafetyFair"
            name="Chance of losing balls"
            type="radio"
            class="choice"
            value="fair"
            v-model="ballSafety"
          />
          <label for="ballSafetyFair" class="checkbox">
            Fair </label
          ><input
            id="ballSafetyHigh"
            name="Chance of losing balls"
            type="radio"
            class="choice"
            value="high"
            v-model="ballSafety"
          />
          <label for="ballSafetyHigh" class="checkbox">
            High
          </label>
        </div>
      </div>
      <div class="field">
        <label class="label">Accessibility/Convenience <span class="error" v-show="errors.accessibility">*required</span></label>
        <div class="checkbox-wrapper">
          <input
            id="accessibilityEasy"
            name="Accessibility/Convenience"
            type="radio"
            class="choice"
            value="easy"
            v-model="accessibility"
          />
          <label for="accessibilityEasy" class="checkbox">
            Easy </label
          ><input
            id="accessibilityFair"
            name="Accessibility/Convenience"
            type="radio"
            class="choice"
            value="fair"
            v-model="accessibility"
          />
          <label for="accessibilityFair" class="checkbox">
            Fair </label
          ><input
            id="accessibilityHassle"
            name="Accessibility/Convenience"
            type="radio"
            class="choice"
            value="hassle"
            v-model="accessibility"
          />
          <label for="accessibilityHassle" class="checkbox">
            Hassle
          </label>
        </div>
      </div>
      <input
        type="button"
        value="NEXT"
        class="next-button button is-small"
        @click="onNextPage"
      />
    </div>
    <div class="personal-details-wrapper">
      <div class="field">
        <label class="label">Player Name</label>
        <input class="input is-small" type="text" v-model="player" />
      </div>
      <div class="field">
        <label class="label">Instagram ID</label>
        <input class="input is-small" type="text" v-model="ig" />
      </div>
      <div class="field">
        <label class="label">Wall Remarks</label>
        <div class="control">
          <textarea
            class="textarea is-small"
            placeholder="e.g. Only after 9pm"
          ></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Wall Photo</label>
        <div class="file is-small">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              ref="imageFile"
              accept="image/png, image/jpeg"
              @change.prevent="setFile($event.target.files)"
            />
            <span class="file-cta">
              <span class="file-icon"
                ><font-awesome-icon
                  class="social-icon"
                  :icon="['fas', 'upload']"
              /></span>
              <span class="file-label">
                Choose a file…
              </span>
            </span>
            <span class="file-name" v-if="files.length">
              {{ files[0].name }}
            </span>
          </label>
        </div>
      </div>
      <div class="control">
        <input
          type="button"
          value="Back"
          class="back-button button is-small"
          @click="onBackPage"
        />
        <input type="submit" value="Submit" class="button submit-button is-small">
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import Search from "./Search";

export default {
  name: "add-wall-form",
  components: { Search },
  data() {
    return {
      player: "",
      ig: "",
      name: "",
      trouble: "",
      timing: [],
      space: "",
      ballSafety: "",
      accessibility: "",
      region: "Select dropdown",
      errors: {
        name: false,
        trouble: false,
        timing: false,
        space: false,
        ballSafety: false,
        accessibility: false,
        region: false,
      },
      imageUrl: "",
      files: [],
      isUploadingImage: false
    };
  },
  computed: {
    position() {
      return this.$store.state.newMarker;
    }
  },
  methods: {
    onBackPage() {
      this.$el.querySelector(".map-details-wrapper").classList.add("active");
      this.$el.querySelector(".personal-details-wrapper").classList.remove("active");
    },
    onNextPage() {
      if (!this.checkWallDetails()) {
        return;
      }
      this.$el.querySelector(".map-details-wrapper").classList.remove("active");
      this.$el.querySelector(".personal-details-wrapper").classList.add("active");
    },
    checkWallDetails() {
      const inputs = ['name', 'region', 'trouble', 'timing', 'space', 'ballSafety', 'accessibility'];
      let isValid = true;

      for (let i = 0; i < inputs.length; i += 1) {
        if (inputs[i] === 'timing') {
          const error = !this[inputs[i]].length;
          this.errors[inputs[i]] = error;
          isValid = isValid && !error;
        } else if (inputs[i] === 'region') {
          const error = this[inputs[i]] === 'Select dropdown';
          this.errors[inputs[i]] = error;
          isValid = isValid && !error;
        } else {
          const error = !this[inputs[i]]
          this.errors[inputs[i]] = error;
          isValid = isValid && !error;
        }
      }

      return isValid;
    },
    handleForm(event) {
      event.preventDefault();

      this.uploadImageFile(this.files, async () => {
        const { lat, lng } = this.position;
        const data = {
          ...this.$data,
          position: {
            lat,
            lng
          }
        };
        delete data.files;
        delete data.isUploadingImage;

        try {
          const res = await axios.post(
            "https://hkwallmap.firebaseio.com/walls.json",
            data
          );
          console.log(res);
          event.target.reset();
        } catch (err) {
          console.error(err);
        }
      });
    },
    setFile(files) {
      this.files = files;
    },
    uploadImageFile(files, cb) {
      if (!files.length) {
        return cb();
      }
      const file = files[0];

      if (!file.type.match("image.*")) {
        alert("Please upload an image.");
        return;
      }

      const metadata = {
        contentType: file.type
      };

      this.isUploadingImage = true;

      // Create a reference to the destination where we're uploading
      // the file.
      const storage = this.$firebase.storage();
      const imageRef = storage.ref(`images/${file.name}`);

      const uploadTask = imageRef
        .put(file, metadata)
        .then(snapshot => {
          // Once the image is uploaded, obtain the download URL, which
          // is the publicly accessible URL of the image.
          return snapshot.ref.getDownloadURL().then(url => {
            return url;
          });
        })
        .catch(error => {
          console.error("Error uploading image", error);
        });

      // When the upload ends, set the value of the blog image URL
      // and signal that uploading is done.
      uploadTask.then(url => {
        this.imageUrl = url;
        this.isUploadingImage = false;
        cb();
      });
    }
  }
};
</script>
