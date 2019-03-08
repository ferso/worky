import 'whatwg-fetch'

//Request
//document.querySelector('form')
export const Request = (source,data={},label='') => {
    return fetch(source,{
    	body:data,
	    method: 'POST',
	    headers:{ 'Accept': 'application/json', 'Authorization':`bearer ${ window.localStorage.getItem('appToken') }`}
	})
	.then( response => {
    if(response) {
      return response.json()
    }else{
      return response;
    }
  })
}

//Form
export const Form = (data) => {
   const formData  = new FormData();
   if(data){
     for(let name in data) {
          if(typeof data[name] === 'object' ){
            let tmp = data[name];
              for( let x in tmp){
                formData.append(name, JSON.stringify(tmp[x]));
              }
        }else{
          formData.append(name,data[name]);
        }
     }
   }
  return formData;
};

//Request
export const GetRequest = (source) => {
    return fetch(source,{
	    headers:{ 'Accept': 'application/json'}
	})
	.then( response => {
    if(response) {
      return response.json()
    }else{
      return response;
    }
  })
};
