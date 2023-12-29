const loadKanyeQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuotes(data));
};

const displayQuotes = (quote) => {
  const blockquote = document.getElementById("data-load");
  blockquote.innerHTML = quote.quote;
};
