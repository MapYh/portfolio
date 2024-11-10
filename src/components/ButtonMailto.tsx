import { Link } from "react-router-dom";
import { MailToContent } from "../types/interfaces.ts";
import "./buttonMailto.scss";

const ButtonMailto = ({ mailto, label }: MailToContent) => {
  return (
    <li className="header-nav-item">
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    </li>
  );
};

export default ButtonMailto;
