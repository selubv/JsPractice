(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e) =>{
        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            let json = JSON.parse(xhr.responseText);

            json.forEach((el) => {
                const $li = document.createElement("li");

                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        }else{
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send();
})();

(()=>{
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();
    
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          json.forEach((el) => {
            const $li = document.createElement("li");

            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
          });  

          $fetch.appendChild($fragment);
        })
        .catch((err) => {
            let message = err.statusText || "Ocurrio un errorr";

            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(()=> console.log("Esto se ejecutará independientemente del resultado del API FETCH"));
})();

(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();

            if(!res.ok) throw {status: res.status, statusText: res.statusText};

            json.forEach((el)=>{
                const $li = document.createElement("li");

                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);
        } catch(err){
            let message = err.statusText || "Ocurrio un error";

            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally{
            console.log("Esto se ejecutará independientemente del try... catch");
        }
    }

    getData();
})();

(()=>{
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            let json = res.data;

            json.forEach((el) => {
                const $li = document.createElement("li");

                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axios.appendChild($fragment);
        })
        .catch((err)=>{
            let message = err.response.statusText || "Ocurrio un error";

            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
        .finally(() => {
            console.log("Esto se ejecuta independientemente del resultado del Axios");
        });
})();

(()=>{
    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;

            json.forEach((el)=>{
                const $li = document.createElement("li");

                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment);
        } catch(err){
            let message = err.response.statusText || "Ocurrio un error";

            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally{
            console.log("Esto se ejecutará independientemente del try... catch");
        }
    }

    getData();
})();