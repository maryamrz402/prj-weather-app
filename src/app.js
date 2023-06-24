function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours= date.getHours();
    if(hours<10){
       hours= `0${hours}`;
    }
    let minutes=date.getMinutes();
    if(minutes<10){
      minutes = `0${minutes}`;
    }
    let days=["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrsday",
    "Friday",
    "saturday"];
    let day= days[date.getDay()];
    return` ${day} ${hours}:${minutes}`;


 
    }
function displayWeather(response){
 
 let countryElemnt=document.querySelector("#country");
 let cityElement=document.querySelector("#city");
 let tempElement=document.querySelector("#temp");
 let descriptionElement=document.querySelector("#description");
 let humidityElement=document.querySelector("#humidity");
 let windElement=document.querySelector("#wind");
 let dateElement=document.querySelector("#date");
 let iconElement=document.querySelector("#icon");
 celsiusTemp =response.data.temperature.current;

 
 tempElement.innerHTML= Math.round(celsiusTemp);
 cityElement.innerHTML=response.data.city;
countryElemnt.innerHTML=response.data.country;
descriptionElement.innerHTML=response.data.condition.description;
humidityElement.innerHTML= response.data.temperature.humidity;
windElement.innerHTML=Math.round( response.data.wind.speed);
tempElement.innerHTML= response.data.temperature.temp;
dateElement.innerHTML= formatDate(response.data.time *1000);
iconElement.setAttribute("src",`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`);
iconElement.setAttribute("alt", response.data.condition.description);
 
 }
 


 function search(city){
    let apiKey = "520fod794c0bd8f40170aa28e33at72e"; 
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; 
    axios.get(apiUrl).then(displayWeather);
   }
   console.log(apiUrl);

 function handleSubmit(event){
    event.preventDefault();
 let cityInputElement=document.querySelector("#city-input");
search(cityInputElement.value);
 }
 
 function showFahrenheitTemp(event){
    event.preventDefault();
    let tempElement= document.querySelector("#temp");

    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheitTemp=(celsiusTemp*9)/ 5 + 32;
    tempElement.innerHTML=Math.round(fahrenheitTemp);
    

}
function showCelsiusTemp(event){
   event.preventDefault();

   celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
   let tempElement= document.querySelector("#temp");
tempElement.innerHTM = Math.round(celsiusTemp); 

}



let celsiusTemp = null;
 
 let form = document.querySelector("#search-form");
 form.addEventListener("submit",handleSubmit);
  
 let fahrenheitLink=document.querySelector("#fahrenheit-link");
 fahrenheitLink.addEventListener("click",showFahrenheitTemp);


 let celsiusLink=document.querySelector("#celsius-link");
 celsiusLink.addEventListener("click",showCelsiusTemp);