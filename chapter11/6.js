const todos = [{ id: 1, checked: true }, { id: 2, checked: true }];
const nextTodos = […todos];


nextTodos[0].checked = false;
console.log(todos[0] === nextTodos[0]); // 아직까지는 똑같은 객체를 가리키고 있기 때문에 true



nextTodos[0] = {
  …nextTodos[0],
  checked: false
};
console.log(todos[0] === nextTodos[0]); // 새로운 객체를 할당해 주었기에 false