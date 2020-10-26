async function request(){
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const object = await response.json();

    const outputJson = JSON.stringify(object);
    const outputConfirm = "<h2>Dados obtidos do servidor!</h2>";

    document.getElementById("dados").innerHTML = outputJson;
    if (outputJson != null) {
        document.getElementById("confirm").innerHTML = outputConfirm;
    }
}

request();
