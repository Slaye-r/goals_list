import GoalItems from '../GoalItems/GoalItems';
import './GoalList.css';

const GoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <GoalItems
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </GoalItems>
      ))}
    </ul>
  );
};

export default GoalList;
