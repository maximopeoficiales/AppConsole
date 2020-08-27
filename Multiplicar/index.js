const fs = require("fs");
const colors = require("colors");
let mostrarTabla = async (base, limite) => {
  if (!Number(base) || !Number(limite))
    return `Los parametros ingresados no son un numero`.red;

  let data = `
  =================== \n
  Tabla de ${base} \n
  =================== \n
  `.green;
  for (let index = 0; index <= limite; index++) {
    data += `${base} * ${index} = ${base * index} \n`.magenta;
  }
  return data;
};
let crearTabla = async (base, limite) => {
  if (!Number(base)) return `No es un numero "${base}"`.red;
  let data = "";
  for (let index = 0; index <= limite; index++) {
    data += `${base} * ${index} = ${base * index} \n`;
  }
  fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (error) => {
    if (error) throw new Error(error);
  });
  return (
    "El archivo".reset +
    ` tabla-${base}-limite-${limite}.txt se ha creado exitosamente`.cyan
  );
};

module.exports = {
  crearTabla,
  mostrarTabla,
};
