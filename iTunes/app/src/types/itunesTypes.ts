export interface ItunesTypes {
    resultCount: number,
    results: [Result]
}
export interface Result {
    collectionName: string,
    collectionId: string,
    album: string,
    collectionPrice: number,
    artworkUrl100: string,
    artworkUrl600: string,
    doSomething():string,
    feedUrl: string
}