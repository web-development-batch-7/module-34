const restApi = () => {
    // const API = ''
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => countriesLoad(data))
}

const countriesLoad = (data) => {
    console.log(data);

    for (const countries of data) {
        // console.log(countries.name.common);
        const country = document.getElementById('country');
        const div = document.createElement('div');
        div.innerHTML =
            `
    
    <div class="card" style="width: 18rem;">
  <img src=" ${countries.flags.png} " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${countries.name.common} </h5>
    <p class="card-text"> ${countries.capital ? countries.capital : 'No Capital'} </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    
    `


        country.appendChild(div)
    }



}

restApi()