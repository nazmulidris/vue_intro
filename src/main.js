import './TodoComponents.js';

new Vue(
    {
        el: '#app_basic',
        data: {
            message: '🐵 Hello World 🔮',
            timestamp: `Timestamp ${new Date().toLocaleString()}`,
        },
    });

new Vue(
    {
        el: '#app_loops',
        data: {
            todos: [{
                text: 'Learn JavaScript',
            },
                {
                    text: 'Learn Vue',
                },
                {
                    text: 'Build something awesome',
                },
            ],
        },
    });

new Vue(
    {
        el: '#app_onclick',
        data: {
            message: "Click me (random number generate)",
        },
        methods: {
            randomGenerate() {
                this.message = Math.random();
            },
        },
    });

new Vue(
    {
        el: '#app_model',
        data: {
            value: "Some string data",
        },
    });
