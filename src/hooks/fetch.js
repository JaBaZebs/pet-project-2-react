function fetchingData(url, queryParams){
    if(queryParams){
        return fetch(url + '?' + new URLSearchParams(queryParams))
    }
    else{
        return fetch(url);
    }
}
export default fetchingData;