import React, { use, useState } from "react";
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';

import chip_branco from '../../../public/Img/chip_branco.svg'
import x from '../../../public/Img/x.svg'
import menu_hamb from '../../../public/Img/menu_hamb.svg'
import lg_letra_branca from '../../../public/Img/logo_letra_branca.png'
import user from '../../../public/Img/user.svg'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div
          className={`${styles.menuLat} ${menuOpen ? styles.slideIn : styles.slideOut}`}
          id="menuLat"
        >
          <Image src={x} alt="Fechar menu" onClick={handleCloseMenu}/>
          <ul>
            <li className={styles.opc2} id="opc2">
              <Image src={chip_branco} alt="" id={styles.icon} />
              <Link href="/home" onClick={handleCloseMenu} ><p>Home</p></Link>
            </li>
            <li className={styles.opc2} id="opc2">
              <Image src={chip_branco} alt="" id={styles.icon} />
              <Link href="/aboutUs" onClick={handleCloseMenu} ><p>Sobre Nós</p></Link>
            </li>
            <li className={styles.opc2} id="opc2">
              <Image src={chip_branco} alt="" id={styles.icon} />
              <Link href="/" onClick={handleCloseMenu} >Login</Link>
            </li>
          </ul>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.menuHamb} id="menuHamb" onClick={handleMenuToggle}>
              <Image src={menu_hamb} alt="Menu" />
            </li>
            <li>
              <Link href="/home">
                <Image id={styles.logo} src={lg_letra_branca} alt="" />
              </Link>
            </li>
            <li className={styles.opc}>
              <Image src={chip_branco} alt="" id={styles.icon} />
              <Link href="/aboutUs"><p>Sobre Nós</p></Link>
            </li>
            <a href="#mapa">
              <li className={styles.opc}>
                <Image src={chip_branco} alt="" id={styles.icon} />
                <p>Oficinas da Região</p>
              </li>
            </a>
            <a href="#infoProblem">
              <li className={styles.opc}>
                <Image src={chip_branco} alt="" id={styles.icon} />
                <p>Informar Problema</p>
              </li>
            </a>
            <Link href="/">
              <li className={styles.login}>Login</li>
            </Link>
            <Link href="/user">
              <li>
                <Image src={user} alt="" id={styles.profile} />
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
