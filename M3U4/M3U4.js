/*inicio botones*/
const color = ["rgb(238, 71, 71)", "rgb(69, 164, 69)", "rgb(120, 120, 214)"];

let contenedor = document.getElementsByClassName('contenedor1')[0];
const botones = document.querySelectorAll('.cuadrado');

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', function () {
        let id = this.id;
        if (id == "rojo") {
            contenedor.style.backgroundColor = color[0];
        }
        if (id == "verde") {
            contenedor.style.backgroundColor = color[1];
        }
        if (id == "azul") {
            contenedor.style.backgroundColor = color[2];
        }
    })
}
/* fin botones*/

/*inicio contador de caracteres */
const boton = document.querySelector('.calcular');
const textoIngresado = document.getElementById('textoContar');
const valor = document.getElementById('resultado');

function ContarCaracteres() {
    let contador = 0;
    const texto = textoIngresado.value;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== ' ' && texto[i] !== '\n' && texto[i] !== '\t') {
            contador++;
        }
    }
    return contador
}

boton.addEventListener('click', function () {
    valor.textContent = ContarCaracteres();
})
/*fin contador caracteres*/

/*inicio array aprobados*/
const alumnos = [
    { nombre: "Juan Gomez", nota: 7 },
    { nombre: "Pedro Rodriguez", nota: 4 },
    { nombre: "Roxana García", nota: 8 },
    { nombre: "Luciano Lopez", nota: 5 },
    { nombre: "Fernanda Gimenez", nota: 6 },
    { nombre: "Florencia Martinez", nota: 10 },
    { nombre: "Raúl Sanchez", nota: 7 },
    { nombre: "Sandra Figueroa", nota: 8 }
];

const lTodos = document.getElementById('todos');
const lAprobados = document.getElementById('aprobados');

alumnos.forEach(({ nombre, nota }) => {
    const li = document.createElement('li');
    li.innerText = `${nombre}: ${nota}`;
    lTodos.appendChild(li);
});

const aprobados = alumnos.filter(alumno => alumno.nota >= 7);

aprobados.forEach(({ nombre, nota }) => {
    const li = document.createElement('li');
    li.innerText = `${nombre}: ${nota}`;
    lAprobados.appendChild(li);
});
/*fin array aprobados*/