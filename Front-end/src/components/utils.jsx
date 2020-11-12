function makeOptions(method, body) {
    method = method?method:'GET';
    var opts =  {
      method: method,
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    if(body){
      opts.body = body;
    }
    return opts;
 }
  
 function errorCheck(res){
 if(!res.ok){
    return Promise.reject({status: res.status, fullError: res.json() })
 }
 return res.json();
 }
 async function fetchAny(url, callback, method, body){
    const options = makeOptions(method,body);
    console.log(options)
    const response = await fetch(url, options);
    const data = await errorCheck(response);

    callback(data);
 }
  
 export default fetchAny;