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
    { nombre: "Juan Gomez", calificacion: 7 },
    { nombre: "Pedro Rodriguez", calificacion: 4 },
    { nombre: "Roxana García", calificacion: 8 },
    { nombre: "Luciano Lopez", calificacion: 5 },
    { nombre: "Fernanda Gimenez", calificacion: 6 },
    { nombre: "Florencia Martinez", calificacion: 10 },
    { nombre: "Raúl Sanchez", calificacion: 7 },
    { nombre: "Sandra Figueroa", calificacion: 8 }
];

const lTodos = document.getElementById('todos');
const lAprobados = document.getElementById('aprobados');

alumnos.forEach(({ nombre, calificacion }) => {
    const li = document.createElement('li');
    li.innerText = `${nombre}: ${calificacion}`;
    lTodos.appendChild(li);
});

const aprobados = alumnos.filter(alumno => alumno.calificacion >= 7);

aprobados.forEach(({ nombre, calificacion }) => {
    const li = document.createElement('li');
    li.innerText = `${nombre}: ${calificacion}`;
    lAprobados.appendChild(li);
});
/*fin array aprobados*/