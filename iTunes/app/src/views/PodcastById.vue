<template>
  <div class="home">
    ID: {{ this.iTunesId }}
    <button @click="find">go</button>

      <div v-if="data.resultCount > 0">
         <div v-for="album in data.results" :key="album.collectionName">
           <h3>{{ album.collectionName }}</h3>
           <img :src="album.artworkUrl100" alt="aalbum artwork" />
           <h4>Price: {{ album.collectionPrice }}</h4>
         </div>
      </div>
  </div>
</template>

<script lang="ts">
import { ItunesTypes } from '../types/itunesTypes';
import { defineComponent } from 'vue';
import { itunesFindPodcastById } from '../services/iTunesApi';

export default defineComponent({
  name: 'PodcastById',
  components: {
  },
  data: () => {
    return {
      data: {} as ItunesTypes,
      iTunesId: ''
    }
  },
  mounted(){
    console.log("mounted");
    this.find();
  },
  methods: {
    async find(){
      this.iTunesId = this.$route.params.id.toString();
      console.log(this.iTunesId);
      await this.searchItunes(this.iTunesId);
    },
    async searchItunes(id:string){
      const value = await itunesFindPodcastById(id);
      this.data = value;
      console.log("data", value);
    }
  }
});
</script>
