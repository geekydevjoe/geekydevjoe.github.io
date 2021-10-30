<template>
  <div class="home" style="display: flex; justify-content: center">
      <div v-if="data" class="indented">
         <div class="card">
            <div v-if="data.artworkUrl600 !=''">
             <img :src="data.artworkUrl600" class="card-img-top rounded" alt="podcast artwork" />
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
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    max-width: 400px;padding:16px;
  }
  .idented {
    padding-left:24px;padding-right: 24px;
  }
</style>
<script lang="ts">
import { Result } from '../types/itunesTypes';
import { defineComponent } from 'vue';
import { itunesFindPodcastById, blankResult } from '../services/iTunesApi';
//import PodcastCard from '../components/PodcastCard.vue';

//declare function updateMeta(id: any): any;

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
    this.updateMeta(Number(this.$route.params.id));
  },
  methods: {
    updateMeta(id: number){
      var obj = document.querySelector('meta[name="apple-itunes-app"]');
      if (obj != null){
        obj.setAttribute("content", `app-id=414419105, app-argument=${id}`);
      }
    },
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
