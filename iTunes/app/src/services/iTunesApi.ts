import { ItunesTypes } from "@/types/itunesTypes";

export const itunesSearch = async (search:string):Promise<ItunesTypes> =>
{
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*")
    const request = new Request(
        `https://itunes.apple.com/search?term=${search}&entity=podcast`,
        {
          method: "GET",
          headers,
          mode: "cors",
          cache: "default"
        }
      );
      return await fetch(request).then(val => val.json());
}

export const itunesFindPodcastById = async (id:string):Promise<ItunesTypes> =>
{
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*");
    const url = `https://itunes.apple.com/lookup?id=${id}`;
    console.log(url);
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
        console.log(val);
        return val.json();
      });
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
