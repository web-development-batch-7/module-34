const loadUser = () => {
    const api = 'https://randomuser.me/api/'
    fetch(api)
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = data => {
    // console.log(data);
    document.getElementById('display').innerHTML =
        `
        <div>
        <h1> ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last} </h1>
        <h3>${data.results[0].gender}</h3>
        <img src=${data.results[0].picture.medium} alt="">
    </div>
    `
}