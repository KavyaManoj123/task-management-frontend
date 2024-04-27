import './style.css';

const Card = props => {
  return (
    <div className="hos-card"onClick={props.onClick}>
      <p>{props.topic}</p>
      <p>{props.description}</p>
      <p>{props.dueDate}</p>
      <p>{props.priority}</p>
    </div>
  );
};
export default Card;
