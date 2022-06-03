const API_URL_RANDOM ="https://api.thecatapi.com/v1/images/search?api_key=88d8107a-c912-429a-b1f7-22658b889dba&limit=2";
const API_URL_FAVORITES="https://api.thecatapi.com/v1/favourites?api_key=88d8107a-c912-429a-b1f7-22658b889dba";

const spanError = document.getElementById("error");

async function loadRandomCats(){
    const res =await fetch(API_URL_RANDOM);
    const data = await res.json();
if(res.status!=200){
    spanError.innerHTML="Error"
}else
    {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    
    img1.src= data[0].url;
    img2.src= data[1].url;
}
    
}
async function favoritesCats(){
    const res =await fetch(API_URL_FAVORITES);
    const data = await res.json();
    // console.log(data);
    if(res.status!=200){
        spanError.innerHTML=`Error: ${res.status} ${res.statusText}`
    }else{
        
    }
    
}

loadRandomCats();
favoritesCats();