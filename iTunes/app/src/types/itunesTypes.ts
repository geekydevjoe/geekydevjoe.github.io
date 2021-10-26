export interface ItunesTypes {
    resultCount: number,
    results: [Album]
}
export interface Album {
    collectionName: string,
    collectionId: string,
    album: string,
    collectionPrice: number,
    artworkUrl100: string,
    artworkUrl600: string,
    doSomething():string,
    feedUrl: string,
    artistName: string,
    genres: [string]
}