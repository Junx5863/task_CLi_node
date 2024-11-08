require("colors");

const { guardarDb, leerDb } = require("./src/helpers/guardar_archivo");
const { inquirerMenu, pause, leerInput, listarTareasBorrar } = require("./src/helpers/inquier");
const Tareas = require("./src/models/tareas");

const main = async (params) => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDb = leerDb();

  if (tareasDb) {
    tareas.cargarTareasFromArray(tareasDb);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //crear Tarea
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);

        break;
      case "2":
        tareas.listadoCompleto();

        break;

      case "3":
        tareas.listarPendientesCompletadas(true);
        break;

      case "4":
        tareas.listarPendientesCompletadas(false);
        break;

      case "5":
        break;
        case "6":
          const id = await listarTareasBorrar(tareas.listadoArr);
          break;

    }

    guardarDb(tareas.listadoArr);

    await pause();
  } while (opt !== "0");
};

main();
