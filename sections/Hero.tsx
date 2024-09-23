import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  todos?: string;
  /**
   * @format rich-text
   */
  buttonText?: string;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  buttonColor?: string;
}

export default function TodoList({
  title = "Todo list",
  todos = "Todo 1\nTodo 2\nTodo 3",
  buttonText = "Add todo",
  backgroundColor = "#ffffff",
  buttonColor = "#4CAF50"
}: Props) {
  const todoItems = todos.split('\n').filter(todo => todo.trim() !== '');

  return (
    <div class="max-w-md mx-auto p-6 rounded-lg shadow-lg" style={{ backgroundColor }}>
      <h2 class="text-2xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: title }} />
      <ul class="space-y-2 mb-4">
        {todoItems.map((todo, index) => (
          <li key={index} class="flex items-center">
            <input type="checkbox" class="mr-2 form-checkbox h-5 w-5 text-blue-600" />
            <span>{todo}</span>
          </li>
        ))}
      </ul>
      <button
        class="btn w-full"
        style={{ backgroundColor: buttonColor }}
      >
        <span class="text-white" dangerouslySetInnerHTML={{ __html: buttonText }} />
      </button>
    </div>
  );
}