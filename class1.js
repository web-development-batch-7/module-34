function loadQuote() {
    const api = 'https://api.kanye.rest';
    fetch(api)
        .then(res => res.json())
        .then(data => loadData(data))
}


document.getElementById('btnQuote').addEventListener('click', () => {
    const api = 'https://api.kanye.rest';
    fetch(api)
        .then(res => res.json())
        .then(data => loadData(data))
})




const loadData = (data) => {
    document.getElementById('quote').innerHTML = data.quote
}