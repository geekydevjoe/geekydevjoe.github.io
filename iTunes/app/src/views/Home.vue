<template>
  <div class="home">
    <form @submit.prevent="searchItunes(searchText)">
      <input v-model="searchText" placeholder="search for album"/>
      <div v-if="data.resultCount > 0">
         <div v-for="album in data.results" :key="album.collectionName">
           <h3>{{ album.collectionName }}</h3>
           <img :src="album.artworkUrl100" alt="aalbum artwork" />
           <h4>Price: {{ album.collectionPrice }}</h4>
         </div>
      </div>
    </form>    
  </div>
</template>

<script lang="ts">
import { ItunesTypes } from '../types/itunesTypes';
import { defineComponent } from 'vue';
import { itunesSearch } from '../services/iTunesApi';
import { ApiClientType } from '../types/ApiClient';

declare var ApiClient: any;

export default defineComponent({
  name: 'Home',
  components: {
  },
  data: () => {
    return {
      data: {} as ItunesTypes,
      searchText: "",
      client: {} as ApiClientType
    }
  },
  mounted(){
    console.log("mounted");
    this.client = new ApiClient();
  },
  methods: {
    async searchItunes(search:string){
      console.log("searching");
      const value = await itunesSearch(search);
      this.data = value;
      console.log("data", value);
      console.log(this.client.getUrlAndQuery());
      // this.client.action("joe").data(function(response:any){
      //   console.log("all done");
      // });
    }
  }
});
</script>
