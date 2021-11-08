<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>  
    
    <div class="home">
        <input v-model="searchText"  placeholder="search for album" v-on:change="searchItunes($event, searchText)" />
      
        <div v-if="data.resultCount > 0" class="results">
            <div class="card" v-for="item in data.results" :key="item.collectionName">
                <div v-if="item.artworkUrl600 !=''">
                <router-link :to="{ name: 'PodcastDetails',params:{id: item.collectionId} }">
                <img :src="item.artworkUrl600" v-bind:style="imageStyle(item)" class="card-img-top rounded artwork"  />
                </router-link>
                </div>
                <div class="card-body">
                    <div class="card-title">
                      <h3>{{ item.collectionName }}</h3>
                      <h5 class="secondary-text">{{ item.artistName }}</h5>
                    </div>
                    <div class="card-text">
                      <div class="others">
                        <a :href="icatcherLink(item.collectionId)"><img style="max-width: 80%;" src="../assets/Listen_on_iCatcher.png"></a>
                        <!-- <div class="extras">
                          <div>iTunesID: {{ data.collectionId }}</div>
                          <div><a :href="data.feedUrl">Podcast Feed</a></div>
                        </div> -->
                      </div> 
                    </div>  
                    
                </div>
              </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ItunesTypes, Result } from '../types/itunesTypes';
import { ref, defineComponent } from 'vue';
import { itunesSearch } from '../services/iTunesApi';
import  shared from '../stores/SearchResults';

export default defineComponent({
  name: 'Home',
  setup() {
    return {
      shared // from Search Results
      ,data: ref({} as ItunesTypes)
      ,searchText: ref("")
   }
  },
  mounted(){
    this.data = this.shared.state.results;
    this.searchText = this.shared.state.search;
  },
  methods: {
    icatcherLink(id: string){
      return `icatcher://itunes/${id}`;
    },
    imageStyle(item:Result){
      return `background:url(${item.artworkUrl30}) no-repeat;`;
    },
    async searchItunes(event:any, search:string){
      const value = await itunesSearch(search);
      this.shared.state.search = this.searchText;
      this.shared.state.results = value;
      this.data = value;
      if (value.resultCount > 0 ){
        event.target.blur();
      }
    }
  }
  
});
</script>
<style scoped>
  .card{ 
    max-width:250px;
  }
  .card-body {
    display: flex;
    flex-wrap: wrap;
  }
  .card-text {
    align-self: flex-end;
  }
  .card-text h5 {
    word-wrap: break-word;
    max-height: 1.2em;
    overflow: hidden;
  }
  .card img.artwork {
    border: solid 1px silver;
    width: 200px;
    background-size: cover !important;
    height: 200px;
    background-position: center;
  }
  .card {
    padding: 8px;
  }
  .results {
    display: flex;
    justify-content: center;
    padding-top:24px;
    flex-wrap: wrap;
    gap: 16px;
  }
  .others {
    align-self:flex-end;
  }
  @media(min-width: 800px){
    .results {
        column-gap: 24px; 
      }
  }

  @media(max-width: 800px){
    .results {
        row-gap: 16px; 
      }
  }
  
  </style>

