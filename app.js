console.log('Hello Life');

const world = {
    avg: 72.6,
    women: 74.9,
    men: 70.4
}

let life = () => { };

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

age.addEventListener('input', function () {
    label_age.innerHTML = `${this.value} years old`;
    life();
})

fetch("https://raw.githubusercontent.com/yleprince/life/master/expectancy.json")
    .then(res => res.json())
    .then(expectancies => {
        expectancies.sort((a, b) => a.name.localeCompare(b.name))
            .map(({ name }) => {
                const new_country = document.createElement('option');
                new_country.innerHTML = name;
                new_country.value = name.toLowerCase();
                country.appendChild(new_country)
            });
        life = () => {
            let percentage;
            if (country.value != 'world') {
                const selected = expectancies.find(e => e.name.toLowerCase() === country.value);
                percentage = age.value / selected[gender.value];
            } else {
                percentage = age.value / world[gender.value];
            }
            percentage = Math.min(1, percentage);

            if (percentage >= 1) {
                past.style.backgroundColor = '#d2ffad';
            } else {
                past.style.backgroundColor = '#fff';
            }
            past.style.flex = percentage;
            futur.style.flex = 1 - percentage;
        }
        document.addEventListener('click', life);
        life();
    });
window.setInterval(() => {
    life();
}, 1000);
