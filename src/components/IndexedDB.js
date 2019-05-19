import React, { Fragment, PureComponent } from 'react';
import { fetchTodos } from '../apis/todos';

export default class IndexedDB extends PureComponent {
  state = {
    todos: [],
  };

  async componentDidMount() {
    const todos = await fetchTodos();
    this.setState({ todos });
  }

  render() {
    const { todos } = this.state;
    return (
      <Fragment>
        <h4>IndexedDB Example</h4>
        <ul>
          {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      </Fragment>
    )
  }
}
