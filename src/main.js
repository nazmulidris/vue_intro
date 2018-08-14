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

const vue_app3 = new Vue(
  {
    el: '#app-3',
    data: {
      message: "Click me (random number generate)",
    },
    methods: {
      randomGenerate() {
        this.message = Math.random();
      },
    },
  },
);

const vue_app4 = new Vue(
  {
    el: '#app-4',
    data: {
      value: "Some string data"
    }
  }
);