// List of to do items (accepts an array as props)
Vue.component(
    'todo_list',
    {
        props: ['todo_list_prop'],
        template:
            '<ol>\
                 <todo_item v-for="item in todo_list_prop"\
                            v-bind:todo_item_prop="item"\
                            v-bind:key="item.id"/>\
             </ol>'
    },
);

// Renderer for each to do item (accepts one item as props)
Vue.component(
    'todo_item',
    {
        props: ['todo_item_prop'],
        template:
            '<li v-bind:class="{ strike: todo_item_prop.done }">\
              {{ todo_item_prop.text }}\
            </li>',
    },
);

// Setup the data for the to do list (and and attach to index.html)
new Vue(
    {
        el: '#app_component',
        data: {
            todoList: [
                {id: 0, text: 'Brush teeth', done: true},
                {id: 1, text: 'Buy chocolate', done: false},
                {id: 2, text: 'Sell laptop', done: false},
            ],
        },
    });
