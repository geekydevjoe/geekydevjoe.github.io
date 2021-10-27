<template>
  <div class="home">
    <form @submit="searchItunes(searchText)">
      <input v-model="searchText"  placeholder="search for album"/>
      </form>

      <div v-if="data.resultCount > 0" class="results">
         <div v-for="data in data.results" :key="data.collectionName">
           <div class="card">
              <div v-if="data.artworkUrl100 !=''">
              <router-link :to="{ name: 'PodcastDetails',params:{id: data.collectionId} }">
              <img :src="data.artworkUrl100" class="card-img-top rounded" alt="podcast artwork" />
              </router-link>
              </div>
              <div class="card-body">
                  <h3 class="card-title">{{ data.collectionName }}</h3>
                  <div class="card-text">
                    <h5>{{ data.artistName }}</h5>
                    <div>iTunesID: {{ data.collectionId }}</div>
                    <div>{{ data.feedUrl }}</div>
                    <a class="btn btn-primary" :href="icatcherLink(data.collectionId)">iCatcher</a>
                  </div>
              </div>
            </div>
         </div>
      </div>
  </div>
</template>

<style scoped>
  .card{ 
    max-width:250px;
  }
  .card img {
    border: solid 1px silver;
  }
  .card {
    padding: 8px;
  }
  .results {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    column-gap: 24px;
    
  }
</style>

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
    icatcherLink(id: string){
      return `icatcher://itunes/${id}`;
    },
    async searchItunes(search:string){
      console.log("searching");
      const value = await itunesSearch(search);
      this.data = value;
      console.log("data", value);
    }
  }
});
</script>
