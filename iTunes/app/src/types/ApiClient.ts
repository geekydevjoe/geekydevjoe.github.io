export interface ApiClientType {
    // what does it look like
    getUrlAndQuery():string,
    action(action:string):ApiClientType,
    data(): (response:any) => void
}
