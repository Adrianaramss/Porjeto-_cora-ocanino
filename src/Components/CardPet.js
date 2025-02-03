import { Link } from "react-router-dom";

const CardPet = ({ age, size, behavior, name, img, index }) => {
  return (
    <div key={index} className='card'>
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <ul>
        <li>{age}</li>
        <li>{size}</li>
        <li>{behavior}</li>
      </ul>
     
      <Link className='card__contact' to="/mensagem" aria-label='Falar com responsável'>Falar com responsável</Link>
    </div>
  );
};

export default CardPet;