import "./Language_button.scss";

type ButtonFormat = {
  onClick: any;
};

const Language_button = ({ onClick }: ButtonFormat) => {
  return (
    <button className="button" onClick={onClick}>
      &#x2630; Language &#x2193;
    </button>
  );
};

export default Language_button;
