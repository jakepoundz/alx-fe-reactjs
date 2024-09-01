import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
describe('TodoList', () => {
  it('renders initial todos', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(2); // We expect 2 initial todos
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });
  it('adds a new todo', () => {
    render(<TodoList />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
    const addButton = screen.getByRole('button', { name: 'Add' });
    fireEvent.click(addButton);
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });
  it('toggles a todo as completed', () => {
    render(<TodoList />);
    const checkboxElement = screen.getByRole('checkbox', { name: 'Learn React' });
    fireEvent.click(checkboxElement);
    expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: line-through');
  });
  it('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getByRole('button', { name: 'Delete' }); 
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});