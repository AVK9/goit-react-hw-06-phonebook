// // import { ContactForm } from 'components/ContactForm/ContactForm';
// import FormCreateTodo from 'components/FormCreateTodo/FormCreateTodo';
// import TodoList from 'components/TodoList';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   addTodoAction,
//   removeTodoAction,
//   updateTodoAction,
// } from 'store/todoWithSlise/sliceTodo';

// const TodoPage = () => {
//   const { todo } = useSelector(state => state.todo);
//   const dispatch = useDispatch();

//   const deleteTodo = id => {
//     dispatch(removeTodoAction(id));
//   };
//   const updateTodo = id => {
//     dispatch(updateTodoAction(id));
//   };
//   const createTodo = id => {
//     dispatch(addTodoAction(id));
//   };
//   return (
//     <>
//       <FormCreateTodo createTodo={createTodo} />
//       {/* <ContactForm onSubmit={createTodo} /> */}
//       {todo && (
//         <TodoList todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
//       )}
//     </>
//   );
// };

// export default TodoPage;
