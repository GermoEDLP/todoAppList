const { resolve } = require("path");

require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("======================".green);
    console.log("Seleccione una opción:".green);
    console.log("======================".green);

    console.log(`1. Crear tarea`);
    console.log(`2. Listar tareas`);
    console.log(`3. Listar tareas completadas`);
    console.log(`4. Listar tareas pendientes`);
    console.log(`5. Completar tarea(s)`);
    console.log(`6. Borrar tareas`);
    console.log(`0. Salir \n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Selecciones una opción: \n", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise(resolve=>{
    const readLine = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
    
      readLine.question(`Presione ${"ENTER".green} para continuar...`, (opt) => {
        readLine.close();
        resolve();
      });
  })
};

module.exports = {
  mostrarMenu,
  pausa,
};
