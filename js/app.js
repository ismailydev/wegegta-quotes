const generate = document.querySelector(".generate");
const quote = document.querySelector(".quote__text");

const url = "https://type.fit/api/quotes";

const fetchQuotes = (_) => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const randomNum = Math.floor(Math.random() * data.length);
            if (
                data[randomNum].text.length <= 125 ||
                data[randomNum].text.length == 0
            ) {
                quote.innerHTML = data[randomNum].text;
            } else {
                fetchQuotes();
            }
        });
};

fetchQuotes();
generate.addEventListener("click", fetchQuotes);
