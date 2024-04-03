import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}
const initialState: TodoState = {
  todos: JSON.parse(localStorage.getItem('todos') || '[]'),
  filter: 'all',
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    toggleTodoCompleted(state, action) {
      const todoId = action.payload;
      const todo = state.todos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    clearCompletedTodo(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    setFilter(state, action: PayloadAction<'all' | 'active' | 'completed'>) {
      state.filter = action.payload;
    },
    reorderTodos(
      state,
      action: PayloadAction<{ startIndex: number; endIndex: number }>
    ) {
      const { startIndex, endIndex } = action.payload;
      const newTodos = Array.from(state.todos);
      const [movedTodo] = newTodos.splice(startIndex, 1);
      newTodos.splice(endIndex, 0, movedTodo);
      state.todos = newTodos;
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export type { Todo };
export const {
  addTodo,
  removeTodo,
  toggleTodoCompleted,
  clearCompletedTodo,
  setFilter,
  reorderTodos,
} = todoListSlice.actions;
export default todoListSlice.reducer;
