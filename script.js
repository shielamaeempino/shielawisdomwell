function showAllQuotes() {
    const quotes = document.getElementsByClassName("quote");
    for (let i = 0; i < quotes.length; i++) {
      quotes[i].style.display = "block";
    }
  }

  function showCategoryQuotes(category) {
    const quotes = document.getElementsByClassName("quote");
    for (let i = 0; i < quotes.length; i++) {
      const quote = quotes[i];
      if (quote.classList.contains(category)) {
        quote.style.display = "block";
      } else {
        quote.style.display = "none";
      }
    }
  }

  
