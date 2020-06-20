import quotes from './Quotes.json'

export const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
}