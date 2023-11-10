const btnE1 = document.getElementById("btn")
const quoteE1 = document.getElementById("quote")
const authorE1 = document.getElementById("author")

const apiURl = "https://api.quotable.io/random";

async function getQuote() {
    try {
        btnE1.innerText = "Loading...";
        btnE1.disabled = true;
        quoteE1.innerText = "Updating...";
        authorE1.innerText = "Updating...";
        const response = await fetch(apiURl);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteE1.innerText = quoteContent;
        authorE1.innerText = "~ " + quoteAuthor;
        btnE1.innerText = "Get a quote";
        btnE1.disabled = false;
        console.group(data);
    } catch (error) {
        console.log(error);
        quoteE1.innerText = "An error happened, try again later";
        btnE1.innerText = "An error happened";
        btnE1.disabled = false;
    }
}

//getQuote()

btnE1.addEventListener("click", getQuote)


