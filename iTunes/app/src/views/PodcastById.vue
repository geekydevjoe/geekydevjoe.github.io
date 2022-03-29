<template>
<div>
  <div id="nav">
    <button @click="goBack" class="btn btn-link">Home</button>
  </div>
  <div class="podcastContainer">  
      <div v-if="data" class="indented">
         <div class="card">
            <div v-if="data.artworkUrl600 !=''">
             <img :src="data.artworkUrl600" class="card-img-top rounded artwork" alt="podcast artwork" />
            </div>
           <div class="card-body">
              <h3 class="card-title">{{ data.collectionName }}</h3>
              <div class="card-text">
                <h6>{{ data.artistName }}</h6>
                <div>
                  <a :href="icatcherLink(data.collectionId)"><img style="max-width: 80%; max-height: 44px;" src="../assets/Listen_on_iCatcher.png"></a>
                </div> 
                <div class="extras">
                  <div>iTunesID: {{ data.collectionId }}</div>
                  <div><a :href="data.feedUrl">Podcast Feed</a></div>
                </div>
              </div>
           </div>
         </div>
      </div>
  </div>
</div>

</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
  .card {
    max-width: 400px;padding:32px;
  }
  .idented {
    padding-left:24px;padding-right: 24px;
  }
</style>
<script lang="ts">
import { Result } from '../types/itunesTypes';
import { defineComponent } from 'vue';
import { itunesFindPodcastById, blankResult } from '../services/iTunesApi';
import shared from '../stores/SearchResults';
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
  setup(){
    return  {
      shared
    }
  },
  mounted(){
    console.log("PodcastById","mounted");
    this.find();
    this.updateMeta(Number(this.$route.params.id));
  },
  watch: {
    $route() {
      // react to route changes...
      this.find();
      this.updateMeta(Number(this.$route.params.id));
    }
  },
  methods: {
    goBack() {
        //console.log(this.$router);
        //console.log(window.history);
        console.log("Goback");
        if (window.history.state.back == '/'){
          window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        }
        else {
          this.$router.push('/')
        }
    },
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
      console.log("find");
      this.iTunesId = Number(this.$route.params.id || 0);
      if (this.iTunesId > 0){
        await this.searchItunes(this.iTunesId);
      }
    },
    async searchItunes(id:number){
      console.log("Search Itunes");
      if (id && id > 0){
        const value = await itunesFindPodcastById(id);
        if (value.resultCount == 0){
          this.data = blankResult(id);
        }
        else {
          this.data = value.results[0];
        }
      }
    }
  }
});
</script>
