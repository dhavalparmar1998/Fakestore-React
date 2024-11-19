async function fetchapi(apipath){
    var res = await fetch(apipath);
    var record = await res.json();
    return record;
}

export default fetchapi;