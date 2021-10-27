<template>
  <div class="home" style="display: flex; justify-content: center">
      <div v-if="data">
         <div class="card" style="max-width: 400px">
           <img :src="data.artworkUrl600"  class="card-img-top rounded" alt="podcast artwork" />
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
</template>

<script lang="ts">
import { ItunesTypes, Result } from '../types/itunesTypes';
import { defineComponent } from 'vue';
import { itunesFindPodcastById, blankResult } from '../services/iTunesApi';
//import PodcastCard from '../components/PodcastCard.vue';

export default defineComponent({
  name: 'PodcastById',
  components: {
  },
  data: () => {
    return {
      data: {} as Result,
      iTunesId: 0
    }
  },
  mounted(){
    console.log("mounted");
    this.find();
  },
  methods: {
    icatcherLink(id: string){
      return `icatcher://itunes/${id}`;
    },
    async find(){
      this.iTunesId = Number(this.$route.params.id);
      console.log(this.iTunesId);
      await this.searchItunes(this.iTunesId);
    },
    async searchItunes(id:number){
      const value = await itunesFindPodcastById(id);
      if (value.resultCount == 0){
        this.data = blankResult(id);
      }
      else {
        this.data = value.results[0];
      }
      console.log("data", value.results[0]);
    }
  }
});
</script>
