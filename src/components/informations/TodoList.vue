<template>
  <div
    class="px-2 h-100 w-full flex flex-col items-center justify-center bg-teal-lightest font-sans"
  >
    <h1 class="text-6xl">TODO LIST</h1>
    <!-- Add todo -->
    <form
      class="mt-6 flex flex-col sm:flex-row lg:w-2/3 justify-between border-2 border-green-800 rounded-xl py-3 px-6 w-full"
    >
      <div class="flex items-center text-center">
        <label class="mb-0" for="todo">Todo:</label>
        <input type="hidden" v-model="newTodo.id" />
        <input
          type="text"
          v-model="newTodo.name"
          placeholder="input todo here ..... "
          class="ml-3 border-b border-black bg-transparent w-full sm:max-w-full"
        />
      </div>
      <div class="flex items-center mt-3 sm:mt-0">
        <label class="mb-0" for="category">category:</label>
        <select
          class="ml-3 bg-transparent text-black"
          v-model="newTodo.category"
          name="categorys"
          id="category"
        >
          <option
            v-for="(category, index) in categorys"
            :key="index"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
      <button
        class="border py-2 px-3 border-cyan-600 hover:text-neutral-600 sm:w-24 rounded-lg hover:bg-cyan-500 mt-3 sm:mt-0 w-full"
        @click.prevent="addTodo"
      >
        Add
      </button>
    </form>

    <!-- update todo -->
    <form
      v-if="isOpenUpdate"
      class="relative mt-6 flex flex-col sm:flex-row w-full lg:w-2/3 justify-between border-2 border-green-800 rounded-xl py-3 px-6"
    >
      <div class="flex items-center text-center mt-2 sm:mt-0">
        <label class="mb-0" for="todo">Todo: </label>
        <input
          class="ml-3 border-b border-black bg-transparent w-full sm:max-w-full"
          type="text"
          placeholder="update todo here ..... "
          v-model="formUpdateTodo.name"
        />
      </div>
      <div class="flex items-center mt-2 sm:mt-0">
        <label class="mb-0" for="category">category:</label>
        <select
          class="bg-transparent text-black"
          v-model="formUpdateTodo.category"
          name="categorys"
          id="category"
        >
          <option
            v-for="(category, index) in categorys"
            :key="index"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
      <button
        class="border py-2 px-3 border-cyan-600 hover:text-neutral-600 hover:bg-sky-300 mt-2 sm:mt-0"
        @click.prevent="updateTodo(idUpdate)"
      >
        submit
      </button>
      <i @click.prevent="isOpenUpdate = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10 hover:text-red-700 cursor-pointer absolute top-0 right-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </i>
    </form>

    <div class="mt-4 mb-2 flex w-full justify-around p-2 md:w-2/3">
      <button
        class="border py-2 px-3 border-cyan-600 hover:text-neutral-600"
        @click="viewAll"
      >
        View All
      </button>
      <select
        class="border py-2 px-3 border-cyan-600 hover:text-neutral-600 bg-transparent"
        name="categorys"
        id="category"
        v-model="filterCategory"
        @change="filterTodosbyCate(filterCategory)"
      >
        <option
          v-for="(category, index) in categorys"
          :key="index"
          :value="category"
          class="bg-slate-400"
        >
          {{ category }}
        </option>
      </select>
      <button
        class="border py-2 px-3 border-cyan-600 hover:text-neutral-600"
        @click="waiting"
      >
        Done
      </button>
    </div>

    <div class="flex flex-col lg:w-2/3 items-center justify-center w-full">
      <div
        v-for="todo in todos"
        :key="todo.id"
        class="flex mt-2 mb-4 py-4 px-6 rounded-xl text-start w-full justify-between bg-zinc-200"
      >
        <div
          class="flex flex-col text-xl text-zinc-950 hover:text-red-900 cursor-pointer w-2/3"
          @click="doneTodo(todo)"
          :class="{ 'line-through': todo.isDone }"
        >
          <h2 class="text-cyan-700 hover:text-red-900 break-words">
            {{ todo.name }}
          </h2>
          <p>category: {{ todo.category }}</p>
        </div>
        <div class="flex md:w-1/3 w-1/4 items-center justify-around">
          <button
            class="text-2xl flex-no-shrink w-32 h-12 p-2 ml-4 mr-2 border-2 rounded-xl text-green-500 border-green-500 hover:bg-green-500 hover:text-black hidden md:block"
            @click="OpenUpdate(todo.id)"
          >
            Edit
          </button>
          <i @click="OpenUpdate(todo.id)"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 md:hidden text-black hover:text-cyan-700 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </i>
          <button
            class="text-2xl flex-no-shrink w-32 h-12 p-2 ml-2 border-2 rounded-xl text-red-500 border-red-500 hover:bg-red-500 hover:text-black hidden md:block"
            @click.prevent="deleteTodo(todo.id)"
          >
            Delete
          </button>
          <i @click.prevent="deleteTodo(todo.id)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-12 h-12 md:hidden text-black hover:text-red-700 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../../configs/firebase";
import {
  collection,
  getDocs,
  query,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  where,
} from "firebase/firestore";
export default {
  data() {
    return {
      todos: [],
      newTodo: {
        name: "",
        category: "school",
        isDone: false,
      },
      formUpdateTodo: {
        name: "",
        category: "school",
      },
      categorys: ["school", "web", "app", "football", "game"],
      isOpenUpdate: false,
      idUpdate: "",
      filterCategory: "school",
    };
  },
  methods: {
    async getTodos() {
      const querySnap = await getDocs(query(collection(db, "todos")));

      let newTodos = [];

      querySnap.forEach((doc) => {
        newTodos.push({
          id: doc.id,
          name: doc.data().name,
          category: doc.data().category,
          isDone: doc.data().done,
        });
      });

      this.todos = newTodos;

      newTodos = [];
    },

    async addTodo() {
      if (this.newTodo.name.length > 50) {
        alert("Vui lòng nhập lại todo: Đã quá 50 ký tự");
      } else {
        const colRef = collection(db, "todos");

        const dataObj = {
          name: this.newTodo.name,
          category: this.newTodo.category,
          isDone: false,
        };

        await addDoc(colRef, dataObj);

        this.getTodos();

        this.newTodo.name = "";
      }
    },

    OpenUpdate(id) {
      (this.idUpdate = id), (this.isOpenUpdate = true);
    },

    async updateTodo(id) {
      if (this.formUpdateTodo.name.length > 50) {
        alert("Vui lòng nhập lại todo: Đã quá 50 ký tự");
      } else {
        const docRef = doc(db, "todos", id);

        await updateDoc(docRef, {
          name: this.formUpdateTodo.name,
          category: this.formUpdateTodo.category,
        });
        this.isOpenUpdate = false;
        this.getTodos();
      }
    },

    async deleteTodo(id) {
      await deleteDoc(doc(db, "todos", id));
      this.getTodos();
    },

    async viewAll() {
      const querySnap = await getDocs(query(collection(db, "todos")));

      let newTodos = [];

      querySnap.forEach((doc) => {
        newTodos.push({
          id: doc.id,
          name: doc.data().name,
          category: doc.data().category,
          isDone: doc.data().done,
        });
      });

      this.todos = newTodos;

      newTodos = [];
    },
    async filterTodosbyCate(category) {
      const querySnap = await getDocs(
        query(collection(db, "todos"), where("category", "==", category))
      );

      const newTodos = [];
      querySnap.forEach((doc) => {
        newTodos.push({
          id: doc.id,
          name: doc.data().name,
          category: doc.data().category,
        });
      });

      this.todos = newTodos;
    },

    async doneTodo(todo) {
      todo.isDone = !todo.isDone;

      await updateDoc(doc(db, "todos", todo.id), {
        isDone: todo.isDone,
      });
    },

    async waiting() {
      const querySnap = await getDocs(
        query(collection(db, "todos"), where("isDone", "==", true))
      );

      const newTodos = [];
      querySnap.forEach((doc) => {
        newTodos.push({
          id: doc.id,
          name: doc.data().name,
          category: doc.data().category,
          isDone: doc.data().isDone,
        });
      });
      this.todos = newTodos;
    },
  },
  computed: {},
  created() {
    this.getTodos();
  },
};
</script>
