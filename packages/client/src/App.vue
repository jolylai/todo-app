<template>
  <div class="todo">
    <div class="todo-container">
      <n-space>
        <n-input v-model:value="todo" type="text" placeholder="请输入待办项" />
        <n-button
          type="primary"
          :disabled="!todo.length"
          :loading="loading.create"
          @click="onAdd"
          @keydown.enter="onAdd"
        >
          Add
        </n-button>
      </n-space>

      <n-list bordered>
        <template #header>
          <div style="display: flex; justify-content: space-between">
            <div>Todos</div>
            <n-button size="small" :loading="loading.query" @click="refresh">
              refresh
            </n-button>
          </div>
        </template>
        <template #footer> Total {{ state.total }}</template>

        <n-list-item v-for="item in state.list" :key="item.id">
          <template #suffix>
            <n-button type="warning" size="small" @click="onRemove(item.id)"
              >delete</n-button
            >
          </template>

          <div>{{ item.name }}</div>
        </n-list-item>
      </n-list>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

import { NSpace, NButton, NInput, NList, NListItem } from "naive-ui";
import { queryTodoList, createTodo, removeTodo } from "./api/todo";

const todo = ref("");

const loading = reactive({
  query: false,
  create: false,
  remove: false,
});

const state = reactive({
  list: [],
  total: 0,
});

const refresh = async () => {
  loading.query = true;
  try {
    const { list, total } = await queryTodoList();

    Object.assign(state, { list, total });
  } catch (error) {
    console.log("error: ", error);
  }

  loading.query = false;
};

onMounted(async () => {
  refresh();
});

// add
const addLoading = ref(false);

const onAdd = async () => {
  loading.create = true;
  try {
    await createTodo({ name: todo.value });
    await refresh();
    todo.value = "";
  } catch (error) {
    console.log("error: ", error);
  }

  loading.create = false;
};

const onRemove = async (id) => {
  loading.remove = true;
  try {
    await removeTodo(id);
    await refresh();
  } catch (error) {
    console.log("error: ", error);
  }

  loading.remove = false;
};
</script>

<style souped>
.todo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.todo-container {
  width: 600px;
}
</style>
