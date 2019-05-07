export function guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) + '-' + S4() + '-' + S4() + S4() + S4()).toUpperCase();
}



export function arrayToKeyValueStore(arr: any[]): any {
    return  arr.reduce((obj: any, item: any) => {
        obj[item.id] = item;
        return obj;
    },{});
}

export function keyValueStoreToArray(arr: any): any[] {
    return (Object as any).entries(arr).map((x: any) => x[1]);
}
