import { createAction, handleActions } from ‘redux-actions‘;


(…)



const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({ …state, input: action.payload }),
    [INSERT]: (state, action) => ({
      …state,
      todos: state.todos.concat(action.payload),
    }),
    [TOGGLE]: (state, action) => ({
      …state,
      todos: state.todos.map(todo =>
        todo.id = = = action.payload ? { …todo, done: !todo.done } : todo,
      ),
    }),
    [REMOVE]: (state, action) => ({
      …state,
      todos: state.todos.filter(todo => todo.id != = action.id),
    }),
  },
  initialState,
);



export default todos;