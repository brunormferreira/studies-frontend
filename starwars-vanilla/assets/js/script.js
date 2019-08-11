const content = document.getElementById('content');
const URL = 'https://swapi.co/api/people'

function getInfo(actor) {
  axios.get(URL)
    .then(r => {
      r.data.results.forEach(e => {
        showActors(e);
      })
    })
    .catch (error => { console.log(error) })
}

function showActors(e) {
  const template = `
    <div class="main__container">
      Name: ${e.name}<br>
      Height: ${e.height}<br>
      Hair-Color: ${e.hair_color}
    </div>
  `;
  content.insertAdjacentHTML('beforeend', template)
}

getInfo();