import * as React from 'react';

const todoItemStyle: React.CSSProperties = {
    color: 'red',
    fontSize: 16
};

interface TodoItemProps {
    content: string;
}
const TodoItem: React.SFC<TodoItemProps> = ({ content }) => (
    <li style={todoItemStyle}>
        {content}
    </li>
);

export default TodoItem;