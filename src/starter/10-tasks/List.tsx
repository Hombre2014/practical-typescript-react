import { type Task } from './types';

type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
};

const List = ({ tasks, toggleTask }: ListProps) => {
  return (
    <ul className="list">
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p>{task.description}</p>
            <input
              title="isCompleted"
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => {
                toggleTask({ id: task.id });
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
