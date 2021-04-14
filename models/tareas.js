const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listarTareas() {
    const listado = [];
    Object.keys(this._listado).forEach((key) =>
      listado.push(this._listado[key])
    );
    return listado;
  }

  cargarTareasArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  mostrarListado(tareas = []) {
    console.log();
    tareas.forEach((tarea, i) => {
      let index = `${i + 1}.`.green;
      let desc = ` ${tarea.desc} :: `;
      let estado = tarea.completadoEn ? `completado`.green : `pendiente`.red;
      console.log(index + desc + estado);
    });
    console.log();
  }

  crearTarea(desc = "") { 
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listarPorEstado(completadas = true) {
    let tareas = completadas
      ? this.listarTareas.filter((tarea) => tarea.completadoEn != null)
      : this.listarTareas.filter((tarea) => tarea.completadoEn == null);
    this.mostrarListado(tareas);
  }

  borrarTarea(id = ''){
    delete this._listado[id];
  }

  toggleCompletadas(ids=[]){
    ids.forEach((id)=>{
      const tarea = this._listado[id];
      if(!tarea.completadoEn) tarea.completadoEn = new Date().toISOString();
    })
    this.listarTareas.forEach(tarea=>{
      if(!ids.includes(tarea.id)) this._listado[tarea.id].completadoEn = null;
    })
  }

}

module.exports = Tareas;
