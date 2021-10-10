const searchBtn = document.querySelector("#search-btn");
function changeInfo(id, data) {
    const getId = document.getElementById(id);
    getId.innerHTML = data;
}

searchBtn.addEventListener('click', () => {
    const searchBox = document.getElementById('search-box');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=a09fc5f3b577d191d4616e1ce3749549`)
        .then(res => res.json())
        .then(data => {
            changeInfo("city", data.name);
            changeInfo("temperature", data.main.temp)
            console.log(data)
        })
        .catch(err => {
            alert(`can not find the ${searchBox.value}`)
        })

})





