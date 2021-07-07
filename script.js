//  Get quotes from API
let apiQuotes = []

const quoteSpan = document.getElementById('quote')
const authorSpan = document.getElementById('author')
const twitterButton = document.getElementById('twitter')
const quoteContainer = document.getElementById('quote-container')


function getQuotes(){
    
    fetch('https://type.fit/api/quotes')
    .then( response => {
        
        return response.json()
    })
    .then( result => {
        apiQuotes = result
        newQuote()
    })
    .catch( err => console.log(err))
}

const newQuote = () => {
    
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    quoteSpan.textContent = quote.text;
    authorSpan.textContent = (quote.author === null) ? "Unknown" : quote.author;
}


function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteSpan.textContent} - ${authorSpan.textContent}`;
    window.open(twitterUrl, '_blank');
}


