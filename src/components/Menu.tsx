"use client"
import Link from "next/link";

export function Menu() {

  return (
    <>
      <nav className="navbar  navbar-dark bg-dark pt-3 pb-3">
        <div className="container">
          <Link href="/" className="navbar-brand">Diversus.</Link>
          <form className="d-flex">
              <div>
                <Link 
                href="/cart" 
                className="nav-link btn-primary link-btn-cart  me-3 rounded-pill">
                  <i className="fa fa-shopping-cart me-1" /> 0 item 
                </Link>
              </div>
            <div className="dropdown">
              <div className="avatar-mini" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                <img src='' alt=""/>
              </div>
              <ul className="dropdown-menu dropdown-menu-menu border-0" aria-labelledby="dropdownMenu">
                <li><Link className="dropdown-item" href="/perfil">Perfil</Link></li>
                <li><Link className="dropdown-item" href="/history">Histórico</Link></li>
                <li><button className="dropdown-item" onClick={ (e)=>{console.log('')}} >Sair</button></li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}