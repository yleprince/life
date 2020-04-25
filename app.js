console.log('Hello Life');

const world = {
    avg: 72.6,
    women: 74.9,
    men: 70.4
}

const past = document.getElementById('past');
const futur = document.getElementById('futur');

const gender = document.getElementById('gender');
const country = document.getElementById('country');

const init = document.createElement('option');
init.innerHTML = 'World';
init.value = 'world';
country.appendChild(init);


const label_age = document.getElementById('label_age');
const age = document.getElementById('age');

age.addEventListener('change', function () {
    label_age.innerHTML = `${this.value} years old`;
})

past.style.flex = .8;
futur.style.flex = .2;