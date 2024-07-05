document.addEventListener('DOMContentLoaded', (event) => {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list');
  
    // Load tasks from localStorage
    const loadTasks = () => {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach(task => addTaskToDOM(task));
    };
  
    // Save tasks to localStorage
    const saveTasks = (tasks) => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  
    // Add task to DOM
    const addTaskToDOM = (task) => {
      const li = document.createElement('li');
      li.textContent = task;
      li.className = 'task-item flex justify-between items-center p-2 border-b';
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'btn1';
      removeButton.onclick = () => {
        li.remove();
        removeTaskFromStorage(task);
      };
  
      li.appendChild(removeButton);
      todoList.appendChild(li);
    };
  
    // Add task to storage
    const addTaskToStorage = (task) => {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(task);
      saveTasks(tasks);
    };
  
    // Remove task from storage
    const removeTaskFromStorage = (taskToRemove) => {
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks = tasks.filter(task => task !== taskToRemove);
      saveTasks(tasks);
    };
  
    // Handle form submit
    todoForm.onsubmit = (e) => {
      e.preventDefault();
      const task = taskInput.value.trim();
      if (task !== '') {
        addTaskToDOM(task);
        addTaskToStorage(task);
        taskInput.value = '';
      }
    };
  
    loadTasks();
  });
  