import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { Addtodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {

  const [todos, setTodos] = useState([]);

  const AddTodos = (title) => {
    console.log(title);
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    // setTodos(todos.concat([ newTodo ]))
    // setTodos((prevTodos) => {
    //   return [w
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Navbar title="Todo app" />
      <Addtodo onSubmit={AddTodos} />

      <View>
        {todos.map(todo => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
