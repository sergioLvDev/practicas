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

let array = [1, 2, 3, 4, 2, 35, 5, 100, 1, 2];

const resultado = array.fill(3, 2);

console.log(resultado);
