import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

import Sortable from 'sortablejs';
import renderList from './modules/render.js';
import ToDo from './modules/constructor.js';

let listToDo = new ToDo();
renderList(listToDo);

const addBtn = document.querySelector('.add');
const refresh = document.querySelector('.refresh');
const tasksToDo = document.querySelector('#drag');
const dragArea = tasksToDo;

addBtn.onclick = () => {
  const description = document.querySelector('#input').value;
  if (description) {
    document.querySelector('#input').value = '';
    listToDo.addToDo(description);
    renderList(listToDo);
  }
};

const clearBtn = document.querySelector('.clear-all');
clearBtn.onclick = (e) => {
  e.preventDefault();
  listToDo.clearCompleted();
  renderList(listToDo);
};

new Sortable(dragArea, {
  handle: '.dragging', animation: 150,
});

refresh.onclick = () => {
  listToDo = new ToDo();
  renderList(listToDo);
};