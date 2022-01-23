import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

import { CartButtons } from "../components";
import { links } from "../utils/constants";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3 className="logo">
              i<span>ll</span>umination
            </h3>
          </Link>
          <button type="button" className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    color: var(--clr-black);
    font-family: "Dancing Script", cursive;

    span {
      color: var(--clr-primary-5);
    }
  }

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .nav-links {
    display: none;
  }

  .cart-btn-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
    }

    .nav-links {
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        margin: 0 0.5rem;
      }

      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }

    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
