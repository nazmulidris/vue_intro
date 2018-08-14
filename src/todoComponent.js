Vue.component(
  'todo_item',
  {
    props   : ['todo_item_prop'],
    template:
      '<li v-bind:class="{ strike: todo_item_prop.done }">'
      + '{{ todo_item_prop.text }}'
      + '</li>',
  },
);

new Vue(
  {
    el  : '#app_component',
    data: {
      todoList: [
        {id: 0, text: 'Brush teeth', done: true},
        {id: 1, text: 'Buy chocolate', done: false},
        {id: 2, text: 'Sell laptop', done: false},
      ],
    },
  });
