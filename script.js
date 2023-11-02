const container = document.querySelector(".container");
async function fetchBlagues() {
    const request = await fetch("https://api.blablagues.net/?rub=blagues,videos,pepites,images");
    const response = await request.json();
    
    displayBlagues(response.data);
}
const displayBlagues = (blaguesData) => {
    const blablagues = blaguesData.content;
        
       container.innerHTML = `
       <div class="card">
       <h3>${blablagues.text_head}</h3>
       <p>${blablagues.text}</p>
       <img src="${blablagues.image}">
       </div>`;
    }

fetchBlagues();

document.body.addEventListener("click", () => fetchBlagues());

