const quotes = [
    {
        quote: "Be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein",
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "It is not in the stars to hold our destiny but in ourselves.",
        author: "William ",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: " Nelson Mandela",
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: " Dalai Lama",
    },
    {
        quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
        author: "Plato",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random * quotes.length)];

todaysQuote = quotes[Math.floor(Math.random() * 10)];
console.log(quotes[Math.floor(Math.random() * 10)]);
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;