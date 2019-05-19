import Dexie from "dexie";

const URL = "https://jsonplaceholder.typicode.com/todos";
const db = new Dexie("MyAppDatabase");
db.version(1).stores({
  todos: "id, title, userId, completed"
});

export const fetchTodos = async () => {
  await db.open();
  try {
    const response = await fetch(URL);
    const todos = await response.json();
    await db.table("todos").clear();
    await db.table("todos").bulkAdd(todos);
    return todos;
  } catch (error) {
    // TODO: NEED TO WORRY IF EMPTY
    const todos = await db
      .table("todos")
      .toArray();
    return todos;
  }
};
