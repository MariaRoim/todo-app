(function () {
  let tasks = [];

  let key = '';

  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Enter your task here';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Add a new task'
    button.disabled = true;

    function checkInputValue() {
      if(input.value.trim() === '') {
        button.disabled = true;
      }else {
        button.disabled = false;
      }
    }

    input.addEventListener('input', checkInputValue);

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form, 
      input,
      button,
      checkInputValue,
    };
  }

  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  function createTodoItem(taskObj) {
    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = taskObj.name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    if (taskObj.done) {
      item.classList.add('list-group-item-success');
    }
    doneButton.textContent = 'Done';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Delete';

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
      item,
      doneButton,
      deleteButton
    };
  }

  function saveDataToLocalStorage (key, array) {
    localStorage.setItem(key, JSON.stringify(array));
  }

  function getDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function createTodoApp(container, title = 'To-do list', listName) {
    key = listName;

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    let savedTasks = getDataFromLocalStorage(key);
    if (savedTasks) {
      tasks = savedTasks;
      tasks.forEach(taskObj => {
        let todoItem = createTodoItem(taskObj);

        todoItem.doneButton.addEventListener('click', function () {
          todoItem.item.classList.toggle('list-group-item-success');
          taskObj.done = !taskObj.done;
          saveDataToLocalStorage(key, tasks);
        });

        todoItem.deleteButton.addEventListener('click', function () {
          if (confirm('Are you sure?')) {
            todoItem.item.remove();
            let taskId = taskObj.id;
            tasks = tasks.filter(el => el.id !== taskId);
            saveDataToLocalStorage(key, tasks);
          }
        });

        todoList.append(todoItem.item);
      });
    }

    todoItemForm.form.addEventListener('submit', function(e) {
      e.preventDefault();

      if (!todoItemForm.input.value) {
        return;
      }

      function genrateRandomTaskId() {
        randomId = Math.floor(Math.random() * 100)
        return randomId
      }

      let taskObj = {
        name: todoItemForm.input.value,
        done: false,
        id: genrateRandomTaskId()
      }

      let todoItem = createTodoItem(taskObj);

      tasks.push(taskObj);
      saveDataToLocalStorage(key, tasks);
    
      
      todoItem.doneButton.addEventListener('click', function() {
        todoItem.item.classList.toggle('list-group-item-success');
        taskObj.done = !taskObj.done;
        saveDataToLocalStorage(key, tasks);
      });

      todoItem.deleteButton.addEventListener('click', function() {
        if (confirm('Are you sure?')) {
          todoItem.item.remove();
          let taskId = taskObj.id;
          tasks = tasks.filter(el => el.id !== taskId);
          saveDataToLocalStorage(key, tasks);
        }
      });

      todoList.append(todoItem.item);

      todoItemForm.input.value = '';

      todoItemForm.checkInputValue();
    });
  }

  window.createTodoApp = createTodoApp;

})();