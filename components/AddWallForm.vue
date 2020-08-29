<template>
  <form @submit="handleForm">
    <div class="field">
      <label class="label">Player Name</label>
      <input class="input is-small" type="text" v-model="player">
    </div>
    <div class="field">
      <label class="label">Instagram ID</label>
      <input class="input is-small" type="text" v-model="ig">
    </div>
    <div class="field">
      <label class="label">Region</label>
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
    <div class="field">
      <label class="label">Name of Wall</label>
      <input class="input is-small" type="text" v-model="name" requried>
    </div>
    <div class="field">
      <label class="label">What are the chances of getting into trouble?</label>
      <textarea class="textarea is-small" v-model="trouble" required></textarea>
    </div>
    <div class="field">
      <label class="label">When is the best time to use the wall?</label>
      <input class="input is-small" type="text" v-model="time" required>
    </div>
    <div class="field">
      <label class="label">Is the wall spacious?</label>
      <input class="input is-small" type="text" v-model="space" required>
    </div>
    <div class="field">
      <label class="label">What are the chances of losing the ball?</label>
      <input class="input is-small" type="text" v-model="ballSafety" required>
    </div>
    <div class="field">
      <label class="label">How do you get there?</label>
      <input class="input is-small" type="text" v-model="transportation" required>
    </div>
    <div class="field">
      <label class="label">Wall Characteristics (multiple)</label>
      <label class="checkbox" v-for="character in characteristics" :key="character.name">
        <input type="checkbox" v-model="character.isChecked">
        {{character.name}}
      </label>
    </div>
    <div class="field">
      <div class="file is-small">
        <label class="file-label">
          <input class="file-input" type="file" ref="imageFile" 
            accept="image/png, image/jpeg"
            @change.prevent="setFile($event.target.files)" 
            >
          <span class="file-cta">
            <span class="file-icon"><font-awesome-icon class="social-icon" :icon="['fas', 'upload']"/></span>
            <span class="file-label">
              Choose a file…
            </span>
          </span>
          <span class="file-name" v-if="files.length">
            {{files[0].name}}
          </span>
        </label>
      </div>
    </div>
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'add-wall-form',
  data() {
    return {
      player: '',
      ig: '',
      name: '',
      trouble: '',
      time: '',
      space: '',
      ballSafety: '',
      transportation: '',
      imageUrl: '',
      region: 'Select dropdown',
      characteristics: [
        {
          name: 'Spacious',
          isChecked: false,
        },
        {
          name: 'Weekend',
          isChecked: false,
        },
        {
          name: 'Weekday',
          isChecked: false,
        },
        {
          name: 'Night',
          isChecked: false,
        },
        {
          name: 'Daytime',
          isChecked: false,
        },
        {
          name: 'Short',
          isChecked: false,
        },
        {
          name: 'Tall',
          isChecked: false,
        },
        {
          name: 'Easy to lose ball',
          isChecked: false,
        },
      ],
      files: [],
      isUploadingImage: false
    }
  },
  computed: {
    position() {
      return this.$store.state.newMarker;
    }
  },
  methods: {
    handleForm(event) {
      event.preventDefault(); 
      
      this.uploadImageFile(this.files, async () => {
        const {lat, lng} = this.position;
        const data = {
          ...this.$data, 
          position: {
            lat,
            lng
          }};
        delete data.files;
        delete data.isUploadingImage;

        try {
          const res = await axios.post('https://hkwallmap.firebaseio.com/walls.json', data);
          console.log(res);
          event.target.reset();
        } catch(err) {
          console.error(err)
        }
      });
    },
    setFile(files) {
      this.files = files;
    },
    uploadImageFile (files, cb) {
      if (!files.length) {
        return cb();
      }
      const file = files[0]

      if (!file.type.match('image.*')) {
        alert('Please upload an image.')
        return;
      }

      const metadata = {
        contentType: file.type
      }

      this.isUploadingImage = true;

      // Create a reference to the destination where we're uploading
      // the file.
      const storage = this.$firebase.storage();
      const imageRef = storage.ref(`images/${file.name}`);

      const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
        // Once the image is uploaded, obtain the download URL, which
        // is the publicly accessible URL of the image.
        return snapshot.ref.getDownloadURL().then((url) => {
          return url;
        })
      }).catch((error) => {
        console.error('Error uploading image', error);
      })

      // When the upload ends, set the value of the blog image URL
      // and signal that uploading is done.
      uploadTask.then((url) => {
        this.imageUrl = url;
        this.isUploadingImage = false;
        cb();
      })
    },
  }
}
</script>
