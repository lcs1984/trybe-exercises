

const getQuotes = (url) => {
    return new Promise((resolve, reject)=> {
        fetch(url)
        .then(quote=>quote.json())
        .then(data=>resolve(console.log(data))
        .catch(erro=>reject(console.log('Deu ruim')));
    })
}