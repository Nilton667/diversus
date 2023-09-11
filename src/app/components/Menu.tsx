import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import user from '../assets/photoUser/user.png';
import { useCart } from "../hooks/useCart";
import { getUserProfile, logout } from "../util/auth";

export function Menu() {
  const navigation = useNavigate();
  const [avatar, setAvatar] = useState("");

  const { cart } = useCart();
  const cartSize = cart.length;

  function sessionClose(): void {

    if (logout()) {
      return navigation('/login');
    }

    alert('Falha ao encerar sessão');

  }

  useEffect(() => {

    const userProfile = getUserProfile();

    var img = new Image();
    img.src = userProfile.foto;

    img.onload = () => {
      setAvatar(userProfile.foto);
    };
    // Caso não seja possível
    img.onerror = () => {
      setAvatar(user);
    };

  },
    []
  )

  return (
    <>
      <nav className="navbar  navbar-dark bg-dark pt-3 pb-3">
        <div className="container">
          <Link to="/" className="navbar-brand">Diversus.</Link>
          <form className="d-flex">
            <div><Link to="/cart" className="nav-link btn-primary link-btn-cart  me-3 rounded-pill"><i className="fa fa-shopping-cart me-1" /> {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`} </Link></div>
            <div className="dropdown">
              <div className="avatar-mini" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={
                  avatar ? avatar : user
                } alt="" />
              </div>
              <ul className="dropdown-menu dropdown-menu-menu border-0" aria-labelledby="dropdownMenu">
                <li><Link className="dropdown-item" to="/perfil">Perfil</Link></li>
                <li><Link className="dropdown-item" to="/history">Histórico</Link></li>
                <li><button className="dropdown-item" onClick={e => sessionClose()} >Sair</button></li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}