(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fracment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e) =>{

    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send();
})();