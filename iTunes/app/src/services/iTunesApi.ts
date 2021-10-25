import { ItunesTypes } from "@/types/itunesTypes";

export const itunesSearch = async (search:string):Promise<ItunesTypes> =>
    await fetch(
        `https://itunes.apple.com/search?term=${search}&entity=podcast`,{
            headers: {
                "Access-Control-Allow-Origin": "*",
             }
        }
    ).then(val => val.json());
