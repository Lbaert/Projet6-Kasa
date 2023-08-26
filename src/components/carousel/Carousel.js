import './carousel.scss';
import '../../data/data';

export default function Carousel(props) {
  return (
    <div className="carousel">
      <img src= {props.images [0]} ></img>
    </div>
  );
}