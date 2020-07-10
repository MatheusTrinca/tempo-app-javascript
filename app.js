// Inicializando o Storage e pegando os dados
const storage = new Storage;
const data = storage.getLocationData(); // Traz um objeto com city e state

// Inicializando Objeto Weather e UI
const weather = new Weather(storage.city, storage.state);
const ui = new UI;

// Carregando no junto com o carregamento da pagina
document.addEventListener('DOMContentLoaded', getWeather);

// Evento de trocar de local
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('estado').value;
  //trocar de local
  weather.changeLocation(city, state);
  // Get e Mostrar os novos resultados
  getWeather();
  // salvar no storage
  storage.setLocationData(city, state);
  // Fechar o modal
  $('#locModal').modal('hide');
})

// weather.changeLocation('Miami');

function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results, weather);
  })
  .catch(err => console.log(err));
}


