onload = request();

async function request(){
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const object = await response.json();

    const output = "<h2>Dados obtidos do servidor!</h2>" + JSON.stringify(object);

    document.getElementById("dados").innerHTML = output;
}
