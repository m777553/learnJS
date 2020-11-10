import Abstract from "./abstract.js";

const crearteNoTasksTemplate = () => {
  return (
    `<p class="board__no-tasks">
          Click «ADD NEW TASK» in menu to create your first task
        </p>`
  );
};

export default class NoTasksBoard extends Abstract {
  getTemplate() {
    return crearteNoTasksTemplate();
  }
}
