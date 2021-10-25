<template>
  <div class="home">
    <form @submit="searchItunes(searchText)">
      <input v-model="searchText"  placeholder="search for album"/>
      </form>

      <div v-if="data.resultCount > 0">
         <div v-for="album in data.results" :key="album.collectionName">
           <h3>{{ album.collectionName }}</h3>
           <img :src="album.artworkUrl100" alt="aalbum artwork" />
           <h4>iTunesID: {{ album.collectionId }}</h4>
            <router-link :to="{ name: 'PodcastDetails',params:{id: album.collectionId} }">Details</router-link> 
         </div>
      </div>
  </div>
</template>

<script lang="ts">
import { ItunesTypes } from '../types/itunesTypes';
import { defineComponent } from 'vue';
import { itunesSearch } from '../services/iTunesApi';

export default defineComponent({
  name: 'Home',
  components: {
  },
  data: () => {
    return {
      data: {} as ItunesTypes,
      searchText: ""
    }
  },
  mounted(){
    console.log("mounted");
  },
  methods: {
    async searchItunes(search:string){
      console.log("searching");
      const value = await itunesSearch(search);
      this.data = value;
      console.log("data", value);
    }
  }
});
</script>
