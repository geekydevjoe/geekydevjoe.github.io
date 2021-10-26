<template>
  <div class="home">
      <div v-if="data.resultCount > 0">
         <div v-for="podcast in data.results" :key="podcast.collectionName">
           <h3>{{ podcast.collectionName }}</h3>
           <img :src="podcast.artworkUrl600" alt="album artwork" />
           <div>iTunesID: {{ podcast.collectionId }}</div>
           <div>{{ podcast.feedUrl }}</div>
           <a :href="icatcherLink(podcast.collectionId)">iCatcher</a>
         </div>
      </div>
  </div>
</template>

<script lang="ts">
import { ItunesTypes, Result } from '../types/itunesTypes';
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
