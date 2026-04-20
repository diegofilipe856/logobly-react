import logo from "../../assets/Logo.png";
import ArrowDown from "../../assets/arrowdown2.svg?react";
import UserSquare from "../../assets/usersquare.svg?react";
import HamburgerMenu from "../../assets/hambergermenu.svg?react";
import "./Header.styles.css";
import Dropdown from "../Dropdown";
import { useState } from "react";
const Header = () => {
  const [dominios, setDominios] = useState(false);
  const [servicos, setServicos] = useState(false);

  const handleClickDominios = () => {
    setDominios((isOpen) => !isOpen);
    setServicos(false);
  };
  const handleClickServicos = () => {
    setServicos((isOpen) => !isOpen);
    setDominios(false);
  };

  const servicosList = [
    { id: 1, name: "VPS" },
    { id: 2, name: "Cloud" },
    { id: 3, name: "storage" },
  ];
  const dominiosList = [
    { id: 1, name: ".com" },
    { id: 2, name: ".com.br" },
    { id: 3, name: "net" },
  ];
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar">
          <div className="navegacao">
            <div className="simple">Home</div>
            <div className="nav-dropdown">
              <button
                className="nav-dropdown-button"
                type="button"
                onClick={handleClickDominios}
                aria-expanded={dominios}
                aria-haspopup="menu"
              >
                <span>Domínios</span>
                <ArrowDown />
              </button>
              {dominios && <Dropdown items={dominiosList} />}
            </div>
            <div className="nav-dropdown">
              <button
                className="nav-dropdown-button"
                type="button"
                onClick={handleClickServicos}
                aria-expanded={servicos}
                aria-haspopup="menu"
              >
                <span>Serviços</span>
                <ArrowDown />
              </button>
              {servicos && <Dropdown items={servicosList} />}
            </div>
            <div className="simple">Contato</div>
            <div className="simple">FAQ</div>
            <div className="simple">Blog</div>
          </div>
          <div className="icons">
            <button className="icon-button">
              <UserSquare />
            </button>
            <button className="icon-button">
              <HamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
