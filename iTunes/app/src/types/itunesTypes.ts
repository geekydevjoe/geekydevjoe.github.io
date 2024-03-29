export interface ItunesTypes {
    resultCount: number,
    results: Array<Result>
}
export interface Result {
    collectionName: string,
    album: string,
    collectionPrice: number,
    artworkUrl30: string,
    artworkUrl100: string,
    artworkUrl600: string,
    artistName: string,
    collectionId: number
}