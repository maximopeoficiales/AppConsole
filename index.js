const { crearTabla, mostrarTabla } = require("./Multiplicar");
const { argv } = require("./Config");
console.log(argv);
let comando = argv._[0];
switch (comando) {
  case "listar":
    mostrarTabla(argv.base, argv.limite).then(console.log).catch(console.log);
    break;
  case "crear":
    crearTabla(argv.base, argv.limite).then(console.log).catch(console.log);
    break;
  default:
    console.log("Comando desconocido");
}
