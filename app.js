const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');

const button = document.querySelector('.container-button');
const result = document.querySelector('.result')

const roots = (x,y,z) => {
    let delta = y**2 - 4*x*z;
    return [(-y+Math.sqrt(delta))/2*x,(-y-Math.sqrt(delta))/2*x];
}

button.addEventListener('click', () => {
    let delta = b.value**2 - 4*a.value*c.value;
    if(delta >= 0 && a.value != 0){
        let x = roots(a.value, b.value, c.value);
        result.innerHTML = `
        <p class="container-paragraph">
        ${x[0] + ", " + x[1]}
        </p>
        `;
    }
    else{
        result.innerHTML = `
        <p class="container-paragraph">
        Brak pierwiastków.
        </p>
        `;
    }
})