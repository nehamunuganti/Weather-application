function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=ecca35e5a980f44ce0e17c098ddf4bbe')
.then(response => response.json())
.then(data => {
    document.querySelector(".city").innerHTML=data.city.name;
document.querySelector(".condition").innerHTML=data.list[i].weather[0].description;
document.getElementById("condition").src = "http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png";
document.querySelector(".temperature").innerHTML= Number(data.list[i].main.temp-273).toFixed(2)+ "°C";
document.querySelector(".humidity").innerHTML=Number(data.list[i].main.humidity)+"%";
document.querySelector(".wind").innerHTML=Number(data.list[i].wind.speed)+"km/h";
    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1) + "temp").innerHTML = "Temperature:" + Number(data.list[i].main.temp - 273.15).toFixed(1)+ "°C";
    }
    
    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1) + "humid").innerHTML = "Humidity:" + Number(data.list[i].main.humidity)+ "%";
    }
    
    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1) + "speed").innerHTML = "Windspeed:" + Number(data.list[i].wind.speed) + "km/h";
    }
     for(i = 0; i<7; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    for(i = 0; i<7; i++){
        document.getElementById("day" + (i+1) + "type").innerHTML = "Weather:" +(data.list[i].weather[0].description);
    }    
    console.log(data)
})

.catch(err => alert("Something Went Wrong"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Hyderabad";
    GetInfo();
}


//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 1; i<8; i++){
        document.getElementById("day" + (i)).innerHTML = weekday[CheckDay(i)];
    }