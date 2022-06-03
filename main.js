const API_URL ="https://api.thecatapi.com/v1/images/search?api_key=88d8107a-c912-429a-b1f7-22658b889dba&limit=3";



async function reload(){
    const res =await fetch(API_URL);
    const data = await res.json();

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    img1.src= data[0].url;
    img2.src= data[1].url;
    img3.src= data[2].url;
    
}

reload();