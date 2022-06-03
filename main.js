const API_URL_RANDOM ="https://api.thecatapi.com/v1/images/search?api_key=88d8107a-c912-429a-b1f7-22658b889dba&limit=2";
const API_URL_FAVORITES="https://api.thecatapi.com/v1/favourites?api_key=88d8107a-c912-429a-b1f7-22658b889dba";
const API_URL_FAVORITES_DELETE=(id)=>`https://api.thecatapi.com/v1/favourites/${id}?api_key=88d8107a-c912-429a-b1f7-2265b889dba`;

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
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    btn1.onclick=()=>saveFavoriteCat(data[0].id);    
    btn2.onclick=()=>saveFavoriteCat(data[1].id);    
    img1.src= data[0].url;
    
    img2.src= data[1].url;
}
    
}
async function loadFavoritesCats(){
    const res =await fetch(API_URL_FAVORITES);
    const data = await res.json();
    // console.log(data);
    if(res.status!=200){
        spanError.innerHTML=`Error: ${res.status} ${res.statusText}`
    }else{
        data.forEach((cat)=>
        {
            const section = document.getElementById("favoriteCats");
            const article = document.createElement("article");
            const img = document.createElement("img");
            const btn = document.createElement("button");
            const btnText = document.createTextNode("Delete Favorite Cat");

            btn.appendChild(btnText);
            btn.onclick = ()=>deleteFavoriteCat(cat.id)
            img.src=cat.image.url;
            img.width=200;
            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article);
        }
        )
    }
}

async function saveFavoriteCat(id){
    const rest = await fetch(API_URL_FAVORITES,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            image_id:id
        })
    });
    if(rest.status!=200){
        spanError.innerHTML="Error"
}else{
    console.log("Cat saved");
}

}

async function deleteFavoriteCat(id){
console.log('URL Delete ', API_URL_FAVORITES_DELETE(id));
    const rest = await fetch(API_URL_FAVORITES_DELETE(id),{
        method:'DELETE',
        headers:{
            "x-api-key":`88d8107a-c912-429a-b1f7-2265b889dba`
        }
    });
    // console.log('Saving rest', rest);
    if(rest.status!=200){
     const res = await rest.json();
        spanError.innerHTML=`Error ${rest.status} ${rest.statusText} ${res.message}`;
}else{
    console.log("Cat deleted");
}

}

loadRandomCats();
loadFavoritesCats();