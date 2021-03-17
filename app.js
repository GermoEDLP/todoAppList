
const {guardarArchivo} = require("./helpers/guardarArchivo");
const { inquirerMenu, pause, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

require("colors");

const main = async () => {
  console.log("Hola mundo");
  const tareas = new Tareas();

  let opt = "";
  do {
    opt = await inquirerMenu();
   
    switch (opt) {
        case '1':
            const desc = await leerInput('Descripción: ');
            tareas.crearTarea(desc);
            break;


        case '2':
            console.log(tareas.listarTareas);
            break;
    
        default:
            break;
    }

    guardarArchivo(tareas.listarTareas)

    await pause();

  } while (opt !== "0");
};

main();
