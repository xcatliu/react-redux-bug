import * as React from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <TodoInput />
                <TodoList />
            </div>
        );
    }
}