// Make variables for inputfield and search, loadmore button , images container
const inputbox = document.querySelector("#inputField"),
searchBtn = document.querySelector("#search-btn"),
imagesContainer = document.querySelector(".images"),
loadBtn = document.querySelector(".load-more-btn");

// when user press enter btn to the input box the loadImage() is execute.
inputbox.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        loadImage();
    }
})

// when user click on search btn the loadImage() is execute.
searchBtn.addEventListener('click', () => {
    if(inputbox.value != ''){
        loadImage();
    }else{
        alert('Which type of image you want to search?');
    }
    
})

// when user click on load more btn the loadImage() is execute again.
loadBtn.addEventListener('click', () => {
    document.querySelector('.load-more-btn i').style.animation = "round 3s linear 0s infinite normal";
    setTimeout(loadImage, 3000);
    
})


// define a loadImage() that load the random images from the api 
async function loadImage(){ 
    let url = 'https://api.unsplash.com/search/photos/?query='+inputbox.value+'&per_page=9&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    let response = await fetch(url);
    let data = await response.json();
    data.results.forEach(result => {
        let img = document.createElement("img");
        img.src = result.urls.full;
        imagesContainer.appendChild(img);
    })
    document.querySelector('.load-more-btn i').style.animation = "round 0s linear 0s infinite normal";
    loadBtn.classList.remove('hide');
}