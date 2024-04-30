import "./Dropdown_card.scss";

type LanguageFormat = {
  props: string[];
};

const Dropdown_card = ({ props }: LanguageFormat) => {
  return (
    <div className="Dropdown-card">
      <ul className="Dropdown-card__list">
        {props.map((item, index) => {
          return (
            <li key={index} className="Dropdown-card__list-item">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown_card;
