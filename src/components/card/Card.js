import './card.scss';

export default function Card(props) {
  return (
        <div className="container">
          <h3>{props.title}</h3>
          <img src={props.img} alt={props.title}></img>
        </div>
  );
}