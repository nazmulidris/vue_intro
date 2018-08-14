// src/main.js

const vue_app_1 = new Vue(
  {
    el  : '#app',
    data: {
      message  : '🐵 Monkey balls 🔮',
      timestamp: `Timestamp ${new Date().toLocaleString()}`,
    },
  });


const vue_app2 = new Vue(
  {
    el  : '#app-2',
    data: {
      todos: [
        {text: 'Learn JavaScript'},
        {text: 'Learn Vue'},
        {text: 'Build something awesome'},
      ],
    },
  });