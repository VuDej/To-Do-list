class ToDo {
  constructor() {
    this.list = localStorage.getItem('toDoTask')
      ? JSON.parse(localStorage.getItem('toDoTask'))
      : [];
  }

  addTodo(todo) {
    this.list.push(todo);
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  }

  removeToDo(ID) {
    this.list = this.list.filter((todo) => todo.index !== ID);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  }

  editToDo(todoId, todoDescription) {
    this.list = this.list.map((todo) => {
      if (todo.index === todoId) {
        todo.description = todoDescription
    }
      return todo;
    });
    localStorage.setItem('toDoTask', JSON.stringify(this.list));
  }
}

export default ToDo;
