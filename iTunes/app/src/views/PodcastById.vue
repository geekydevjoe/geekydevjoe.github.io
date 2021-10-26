<template>
  <div class="home">
      <div v-if="data.resultCount > 0">
         <div v-for="podcast in data.results" :key="podcast.collectionName" class="card">
           <img :src="podcast.artworkUrl600"  class="card-img-top rounded" alt="podcast artwork" />
           <div class="card-body">
              <h3 class="card-title">{{ podcast.collectionName }}</h3>
              <div class="card-text">
                <h5>{{ podcast.artistName }}</h5>
                <div>iTunesID: {{ podcast.collectionId }}</div>
                <div>{{ podcast.feedUrl }}</div>
                <a class="btn btn-primary" :href="icatcherLink(podcast.collectionId)">iCatcher</a>
              </div>
           </div>
         </div>
      </div>
  </div>
</template>

<script lang="ts">
import { ItunesTypes, Album } from '../types/itunesTypes';
import { defineComponent } from 'vue';
import { itunesFindPodcastById } from '../services/iTunesApi';
import PodcastCard from '../components/PodcastCard.vue';

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
    icatcherLink(id: string){
      return `icatcher://itunes/${id}`;
    },
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
