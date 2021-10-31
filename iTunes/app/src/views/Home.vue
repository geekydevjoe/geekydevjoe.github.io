<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>  
    
    <div class="home">
        <form @submit="searchItunes(searchText)">
          <input v-model="searchText"  placeholder="search for album"/>
        </form>

        <div v-if="data.resultCount > 0" class="results">
            <div class="card" v-for="data in data.results" :key="data.collectionName">
                <div v-if="data.artworkUrl600 !=''">
                <router-link :to="{ name: 'PodcastDetails',params:{id: data.collectionId} }">
                <img :src="data.artworkUrl600" class="card-img-top rounded artwork" alt="podcast artwork" />
                </router-link>
                </div>
                <div class="card-body">
                    <div class="card-title">
                      <h3>{{ data.collectionName }}</h3>
                      <h5 class="secondary-text">{{ data.artistName }}</h5>
                    </div>
                    <div class="card-text">
                      <div class="others">
                        <a :href="icatcherLink(data.collectionId)"><img style="max-width: 80%;" src="../assets/Listen_on_iCatcher.png"></a>
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
import { ItunesTypes } from '../types/itunesTypes';
import { ref, defineComponent } from 'vue';
import { itunesSearch } from '../services/iTunesApi';
import  shared from '../stores/SearchResults';

export default defineComponent({
  name: 'Home',
  components: {
  },
  // props: {
  //   state: SearchResults
  // },
  data: () => {
    return {
      data: {} as ItunesTypes,
      searchText: ""
    }
  },
   setup(props) {

  //   //const data = ref({ resultCount: 0, results:[]} as ItunesTypes);
     console.log("props",props); // { user: '' }
  //   //const searchTerm = props;
  //   //const searchText = props.search;
  //   //const data = props.results;
  //   //const d = ref(props.value);
    return {
        shared
   }
  },
  mounted(){
    console.log("mounted");
    //console.log("data", this.dat);
    //console.log(this.$props.state);
    this.data = this.shared.state.results;
  },
  methods: {
    icatcherLink(id: string){
      return `icatcher://itunes/${id}`;
    },
    async searchItunes(search:string){
      console.log("searching");
      const value = await itunesSearch(search);
      this.data = value;
      this.shared.state.results = value;
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
    max-width: 200px;
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
  @media(min-width: 700px){
    .results {
        column-gap: 24px; 
      }
  }

  @media(max-width: 700px){
    .results {
        row-gap: 24px; 
      }
  }
  
  </style>

