/* const a = 10;

const boton = document.getElementById("btn");
const parrafo = document.getElementById("parrafo");
boton.onclick = () => {
  parrafo.innerHTML = `
  <h1>Esto es un Titulo</h1>
  <span>Esto es un Span </span>
  `;
};

let cursos = ["HTML", "CSS", "JavaScript", "React"];

let items = "";
for (let i = 0; i < cursos.length; i++) {
  items += ` <li>${cursos[i]}</li>`;
}
document.getElementById("lista").innerHTML = items;
console.log(items);
 */
/*

let auto = {
  marca: "Ford",
  modelo: "Mustang",
  color: "Blanco",
  año: 1970,
  velocidad: 0,
  vender: function () {
    return "Vendido";
  },
  caracteristicas: function () {
    return "Marca: " + this.marca + " Modelo: " + this.modelo;
  },
  acelerar: function (nitro) {
    if (nitro) {
      this.velocidad += nitro;
    } else {
      this.velocidad += 10;
    }
    return this.velocidad;
  },
};
auto.color = "azul";
auto.tamaño = "grande";
console.log(auto.vender());
console.log(auto.caracteristicas());
console.log(auto.velocidad);
console.log(auto.acelerar());
console.log(auto.acelerar(80));
console.log(auto.velocidad);
console.log(auto.acelerar());
console.log(auto.velocidad);
console.log(auto);

// FUNCION CONSTRUCTORA
let array = [];
function Productos(n, t, p, c) {
  this.nombre = n;
  this.tipo = t;
  this.precio = p;
  this.color = c;
}

const producto1 = new Productos("Monitor", "Electronico", 500, "Negro");
const producto2 = new Productos("Teclado", "Electronico", 100, "blanco");
console.log(producto1, producto2);
array.push(producto1, producto2);
console.log(array); */

// clases

/* class Verduras {
  constructor(a, b, c, d, e) {
    this.alimento = a;
    this.color = b;
    this.sabor = c;
    this.peso = d;
    this.tamaño = e;
    // metodo  en la propiedad
    this.cocinar = function () {
      return "Cocinado";
    };
    this.cortar = function () {
      return "Cortado " + this.alimento + " tamaño " + this.tamaño;
    };
  }
  // metodo en la estructura de la clase
  Congelar() {
    return "Congelado " + this.alimento + " " + this.sabor;
  }
}
const verdura1 = new Verduras("Cebolla", "Verde", "Dulce", 100, "Grande");
const verdura2 = new Verduras("Pimiento", "Rojo", "Dulce", 100, "Grande");
console.log(verdura1);

console.log(verdura1.cortar());
console.log(verdura2.Congelar());
 */
// LOS METODOS DE LA CLASE SON FUNCIONES DE OBJETOS Y SOLO PUEDEN SER LLAMADOS DESDE EL OBJETO

// objeto literal
/* const verdura3 = {
  alimento: "tomate",
  color: "rojo",
  sabor: "alcalino",
  peso: 800,
  tamaño: "mediano",
};
const verduras = [verdura1, verdura2];
verduras.push(verdura3);
console.log(verduras);

console.log("alimento" in verdura1); */
/* for (const atributo in verdura1) {
  console.log("Atributo: " + atributo + " Valor: " + verdura1[atributo]);
}
console.log(verdura1.cocinar());
console.log(verdura1.Congelar()); */
/* 
let variable = 'Pedro \f "Perez"';
let string = `hola ${variable}`;
console.log(variable);
console.log(string);

const vari = "educacion";
console.log(vari);
resul = vari.slice(2, 5);
console.log(resul); */

//metodos de array
//           0  1  2  3  4  5  6   7  8   9  10  11
/* 
let array = [
  {
    id: 1,
    name: "Luis",
  },
  {
    id: 2,
    name: "Maria",
  },
  {
    id: 3,
    name: "Pedro",
  },
];
for (const item of array) {
  console.log(item);
  console.log(item.id);
  console.log(item.name);
} */

/* let fecha = new Date();
let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
//          meses.10
console.log(meses[fecha.getMonth()]);

console.log(fecha);
console.log(fecha.getDate());
console.log(fecha.getMonth() + 1); //toma el indice del mes
console.log(fecha.getFullYear());

fecha.setFullYear(2030);
console.log(fecha); */
/* 
const numero = 2.8;
const redondeo = Math.trunc(Math.PI);
console.log(Math.round(Math.PI));

const tipo = typeof redondeo;
const tipo2 = typeof numero;
const tipo3 = typeof "hola";

console.log(tipo, tipo2, tipo3); */

// ciclos

/* const a = "hola mundo";
console.log(a);

let array = ["HTML", "CSS", "JavaScript", "React", "Angular", "VueJS"];
const span = document.getElementById("span");
let texto = " ";
for (let index = 0; index < array.length; index++) {
  texto += array[index];
  if (index < array.length - 1) {
    texto += ", ";
  }
}
span.textContent = texto;
console.log(texto);
console.log(array);
console.log(array.length);

const alumno = {
  id: 1,
  name: "Luis",
  apellido: "Perez",
};

console.log("altura" in alumno);

for (const clave in alumno) {
  console.log(clave, alumno[clave]);
} */

/* 
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let nuevoArray = array.map((item) => item * 2);

console.log(array);
console.log(nuevoArray); */

/* let res = "n";
let numtotal = 0;
while (res === "n") {
  let num = prompt("Ingrese un numero de 1 a 10");
  const tipo = typeof num;
  console.log(num, tipo);
  let numing = parseInt(num);
  const tipo2 = typeof numing;
  console.log(numing, tipo2);
  numtotal = numtotal + numing;
  console.log(numtotal);
  alert("El numero es: " + numing + " y el total es: " + numtotal);
  res = prompt("desea salir escriba s/n");
} */
