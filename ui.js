class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon= document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(results, weather){
    this.location.textContent = results.name+', '+weather.state;
    this.desc.textContent = results.weather[0].description
    this.string.textContent = results.main.temp+' °C';
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${results.weather[0].icon}.png`)
    this.humidity.textContent = `Umidade Relativa: ${results.main.humidity}%`;
    this.pressure.textContent = `Pressão do Ar: ${results.main.pressure} hpa`;
    this.feelsLike.textContent = `Sensação Térmica: ${results.main.feels_like} °C`;
    this.wind.textContent = `Velocidade do Vento: ${results.wind.speed} Km/h`;
  }
}