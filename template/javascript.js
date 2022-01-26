 let inputvalue = `budhlada`;
let search = document.getElementById(`serach_text`);
let search_button = document.getElementById(`search_button`);
search_button.addEventListener(`click`, () => {
    let output = document.getElementById(`output_weather`);
    let searchvalue = document.getElementById(`search_value`);
    output.innerHTML = "";
    if (search.value == "") {
        output.innerHTML = `<h3>please enter some text</h3>`;
        searchvalue.innerText = "";
    }
    else {
        inputvalue = search.value;
        search.value = "";
        let getquote = async () => {
            let api = `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=ebf9b0abbc7d16e67c8ef459705c1f42`;
            try {
                let data = await fetch(api);
                let realdata = await data.json();
                let search_value = document.getElementById(`search_value`);
                let search_temp = document.getElementById(`search_temp`);
                search_value.innerHTML = `city name is ${realdata.name}`;
                search_temp.innerHTML = `temprature is ${realdata.main.temp}`;
            }
            catch (error) {
                console.log(`i found there is some error :(`);
            }
        }
        getquote();
    }
});


