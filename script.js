const button=document.querySelector('#search-button');
button.addEventListener('click', function(){
    const search=document.querySelector('#search-input').value;
    getData(search).then((data) => {
        console.log(data);
        // makeCard(data);
    });
    
    
    
    
})
function getData(search){
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((response) => response.json())
    .catch((error) => error)
}
function makeCard(data){
    // 
}