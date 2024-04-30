import "./Language_button.scss";

type ButtonFormat = {
  onClick: any;
};

const Language_button = ({ onClick }: ButtonFormat) => {
  return (
    <button className="button" onClick={onClick}>
      Change language
    </button>
  );
};

export default Language_button;
