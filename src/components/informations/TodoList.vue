<template>
    <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class=" rounded shadow p-6 m-4 w-full lg:w-3/4 ">
        <div class="mb-4">
            <h1 class="text-grey-darkest">Todo List</h1>
            <div class="flex mt-4">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-violet-600 " v-model="newTodo" @keydown.enter="addTodo" placeholder="Add Todo">
                <button class="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-black hover:bg-teal-500" @click="addTodo">Add</button>
            </div>
        </div>
        <div>
            <div class="flex mb-4 items-center" v-for="(todo, index) in todos" :key="index">
                <p class="w-full text-grey-darkest" :class="{'text-red-700': todo.done}">{{ todo.name }}</p>
                <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded  text-green-500 border-green-500 hover:bg-green-500 hover:text-black" @click="doneTodo(index)">Done</button>
                <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:bg-red-500 hover:text-black" @click="removeTodo(index)">Remove</button>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import {ref} from "vue";
export default {
    setup () {
        const newTodo = ref('');

        const todosData = JSON.parse(localStorage.getItem("todos"));
        const todos = ref(todosData);

        const writeLocalStorage = () => {
            const storageData = JSON.stringify(todos.value);
            localStorage.setItem('todos', storageData);
        }

        const addTodo = () => {
            if (newTodo.value !== "") {
                todos.value.push({
                    name: newTodo.value,
                    done: false,
                })
                newTodo.value = "";
            }
            writeLocalStorage();
        }

        const removeTodo = (index) => {
            todos.value.splice(index, 1);
            writeLocalStorage();
        }

        const doneTodo = (index) => {
            console.log(index);
            console.log(todos.value[index]);
            todos.value[index].done = !todos.value[index].done;
        }
        
        return {
            todos,
            newTodo,
            addTodo,
            writeLocalStorage,
            removeTodo,
            doneTodo,
        }

    }
}
</script>