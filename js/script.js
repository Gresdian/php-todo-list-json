const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            todolist:[]
        }
    },
    mounted() {
        this.getTodoList();
    },
    methods: {
        getTodoList() {
            axios.get(this.apiUrl).then((response) => {
                this.todolist = response.data
            })
        }
    },

}).mount('#app');