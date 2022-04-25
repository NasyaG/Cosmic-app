<template>
  <div class="details_wrapper" v-if="apod">
      <div class="details">
          <h1>{{ apod.title }}</h1>
          <p>{{ apod.date }}</p>
          <img v-if="isImg()" :src="apod.url" :alt="apod.title"/>
           <!-- if video embed in iframe to avoid cross origin reading block error(CORS) -->
          <iframe v-else allowfullscreen :src="apod.url" :alt="apod.title"></iframe>
          <p>{{ apod.explanation }}</p>
      </div>
  </div>
</template>

<script>
import ApiServices from "../services/ApiServices.js";

export default {
    name: "APODDetails",
    props: {
        date: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            apod: {},
        };
    },
    // lifecycle hook
    created() {
        ApiServices.getAPOD(this.date)
         .then((response) => {
             this.apod = response.data;
         })
         .catch((error) => console.log(error));
    },
    methods: {
        isImg() {
            const regex = new RegExp("/image/");
            console.log(this.apod.url);
            console.log("regex.test(this.apod.url)" + regex.test(this.apod.url));
            if(!regex.test(this.apod.url)) {
                return false;
            }
            return true;
        },
    },
};
</script>

<style>

</style>