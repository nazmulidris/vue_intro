// src/main.js

new Vue(
  {
    el  : '#app-basic',
    data: {
      message  : '🐵 Monkey balls 🔮',
      timestamp: `Timestamp ${new Date().toLocaleString()}`,
    },
  });


new Vue(
  {
    el  : '#app-loops',
    data: {
      todos: [
        {text: 'Learn JavaScript'},
        {text: 'Learn Vue'},
        {text: 'Build something awesome'},
      ],
    },
  });

new Vue(
  {
    el: '#app-onclick',
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

new Vue(
  {
    el: '#app-model',
    data: {
      value: "Some string data"
    }
  }
);