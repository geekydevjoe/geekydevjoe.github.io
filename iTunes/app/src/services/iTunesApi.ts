import { ItunesTypes } from "@/types/itunesTypes";

export const itunesSearch = async (search:string):Promise<ItunesTypes> =>
    await fetch(
        `https://itunes.apple.com/search?term=${search}&entity=podcast`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          }
    ).then(val => val.json());
