import { ItunesTypes, Result } from "@/types/itunesTypes";

export const itunesSearch = async (search:string):Promise<ItunesTypes> =>
{
    const headers = new Headers();
    //headers.append("Access-Control-Allow-Origin","*")
    headers.append("Accept","*/*");
    const request = new Request(
        `https://itunes.apple.com/search?term=${search}&entity=podcast&r=${Math.random()}`,
        {
          method: "GET",
          headers,
          mode: "cors",
          cache: "no-cache"
        }
      );
      return await fetch(request).then(val => val.json());
}

export const itunesFindPodcastById = async (id:number):Promise<ItunesTypes> =>
{
    const headers = new Headers();
    //headers.append("Access-Control-Allow-Origin","*");
    headers.append("Accept","*/*");
    const iTunesID = id;
    const url = `https://itunes.apple.com/lookup?id=${id}&r=${Math.random()}`;
    const request = new Request(
        url,
        {
          method: "GET",
          headers,
          mode: "cors",
          cache: "no-cache"
        }
      );
      return await fetch(request).then(val => {
        return val.json();
      }).catch(function(){
        const result : ItunesTypes = {
          resultCount : 0,
          results: []
        };
        return result;
      });
}

export const blankResult = (id:number):Result => {
  const result:Result = { collectionId: id, 
    collectionName: '', 
    album:'', 
    artworkUrl100:'', 
    artworkUrl600:'', 
    artistName:'', 
    collectionPrice: 0 };
    return result;
}
    

    /* 
    ,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            // headers: {
            //     'Access-Control-Allow-Origin': '*'
            // },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
    */
