import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8888",
});

request.interceptors.response.use((response) => {
  return response.data;
});

export function queryTodoList(data) {
  return request({
    method: "post",
    url: "/api/todo/list",
    data: data,
  });
}

export function createTodo(data) {
  return request({
    method: "post",
    url: "/api/todo",
    data: data,
  });
}

export function removeTodo(id) {
  return request({
    method: "delete",
    url: `/api/todo/${id}`,
  });
}
