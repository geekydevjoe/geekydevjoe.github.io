import { reactive, watch } from 'vue'
import { ItunesTypes } from '../types/itunesTypes'
//import { ref } from 'vue'

export default reactive({
  state: {
    search: "Test",
    loading: false,
    results: { resultCount: 0, results:[] } as ItunesTypes
  }
});
  