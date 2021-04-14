const { guardarArchivo, leerArchivo } = require("./helpers/database");
const {
  inquirerMenu,
  pause,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  listadoTareasChecklist
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

require("colors");

const main = async () => {
  const tareas = new Tareas();
  tareas.cargarTareasArray(leerArchivo());

  let opt = "";
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción: ");
        tareas.crearTarea(desc);
        break;

      case "2":
        tareas.mostrarListado(tareas.listarTareas);
        break;

      case "3":
        tareas.listarPorEstado();
        break;

      case "4":
        tareas.listarPorEstado(false);
        break;
      case "5":
        const ids = await listadoTareasChecklist(tareas.listarTareas);
        tareas.toggleCompletadas(ids);
        break;

      case "6":
        const id = await listadoTareasBorrar(tareas.listarTareas);
        const ok = await confirmar('¿Estas seguro?');
        if (ok) tareas.borrarTarea(id);
        break;

      default:
        break;
    }

    guardarArchivo(tareas.listarTareas);

    await pause();
  } while (opt !== "0");
};

main();
