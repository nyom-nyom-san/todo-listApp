import { useState } from 'react'
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


function TodoList({ todo }) {
  console.log(todo)
  return (
    <>
      <ul>
        {todo.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}
      </ul>
    </>
  )

}



function App() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  function addTodo() {
    setTodo([...todo, newTodo]);
    setNewTodo('');
  }

  return (
    <div>
      <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
      <Button variant="primary" className='ms-3' onClick={addTodo}>add</Button>
      <TodoList todo={todo} />
    </div>
  )
}

export default App;