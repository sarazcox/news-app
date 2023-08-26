const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      displayNews(data.articles);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
  
  fetchNews();

 
function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    
    // Create a Bootstrap row container
    const row = document.createElement('div');
    row.classList.add('row');
    
    for (const article of articles) {
        // Create a Bootstrap card div
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-sm-6', 'mb-3', 'mb-sm-0');
        
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Create a card body div
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        
        // Create and append the headline to the card body
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = article.title;
        cardBody.appendChild(title);
        
        // Create and append a link to read more
        const link = document.createElement('a');
        link.classList.add('btn', 'btn-primary');
        link.href = article.url; // Use the article's URL
        link.textContent = 'Read More';
        cardBody.appendChild(link);
        
        // Append the card body to the card
        card.appendChild(cardBody);
        
        // Append the card to the card div
        cardDiv.appendChild(card);
        
        // Append the card div to the row
        row.appendChild(cardDiv);
    }
    
    // Append the row to the newsDiv
    newsDiv.appendChild(row);
}
