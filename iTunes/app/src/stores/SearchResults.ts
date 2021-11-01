import { reactive, ref, watch } from 'vue'
import { ItunesTypes } from '../types/itunesTypes'

export default reactive({
  state: {
    search: ref(""),
    loading: false,
    results: { resultCount: 0, results:[] } as ItunesTypes
  }
});
  