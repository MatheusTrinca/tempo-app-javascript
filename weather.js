// http://api.openweathermap.org/data/2.5/weather?q=CIDADE,ESTADO&appid=APIKEY

class Weather{
  constructor(city, state){
    this.apiKey = '1fd584c776936172c4942d823ee9e17b';
    this.city = city;
    this.state = state;
  }

  // fetch data -> retorna um array com o main e o wind
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&lang=pt&appid=${this.apiKey}`);
    const responseData = await response.json();
    return responseData;
  }
  
  // Mudar local
  changeLocation(city, state){
    this.city = city;
    this.state = state;
    
  }
}



