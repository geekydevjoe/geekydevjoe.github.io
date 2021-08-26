export interface ItunesTypes {
    resultCount: number,
    results: [Result]
}
export interface Result {
    collectionName: string,
    album: string,
    collectionPrice: number,
    artworkUrl100: string,
    doSomething():string
}