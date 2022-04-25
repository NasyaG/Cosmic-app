<template>
  <div class="gallery">
      <h1>test</h1>
      <APODCard v-for="apod in APOD" :key="apod.url" :apod="apod" />
      <!-- data binding api to html element -->
  </div>
</template>

<script>

import ApiServices from '../services/ApiServices.js'
import APODCard from '@/components/APODCard.vue'

export default {
    name: "Gallery",
    components: {
        APODCard,
    },
    data() {
        return {
            APOD: [],
        };
    },
    // lifecycle hook called when component is first built by the browser
    created() {
        ApiServices.getAPODlist()
          .then((response) => {
              this.APOD = response.data;
          })
          .catch((error) => console.log(error));
    },
};
</script>

<style scoped>
.gallery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>

