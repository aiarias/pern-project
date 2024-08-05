import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui";

import { publicRoutes, privateRoutes } from "./navigation";
import { Container } from "../ui/Container";
import { useAuth } from "../../context/AuthContext";

//useLocation nos da la informacion actual de donde estamos

function Navbar() {
  const location = useLocation();
  const { isAuth, signout } = useAuth(); //esto es para saber si esta autenticado o no

  return (
    <nav className="bg-zinc-950">
      <Container className="flex justify-between py-3">
        <Link to="/">
          <h1 className="font-bold text-2xl ">PERN Tasks</h1>
        </Link>

        <ul className="flex gap-x-2">
          {isAuth ? (
            //si esta autenticado muestra los links privados, sino muestra los links publicos
            <>
              {privateRoutes.map(({ path, name }) => (
                <li
                  className={`text-slate-300 ${
                    location.pathname === path && "bg-sky-500 px-3 py-1"
                  }`}
                  key={path}
                >
                  <Link to={path}>{name}</Link>
                </li>
              ))}

              <li onClick={signout}>
                <Button>Logout</Button>
              </li>
            </>
          ) : (
            publicRoutes.map(({ path, name }) => (
              <li
                className={`text-slate-300 ${
                  location.pathname === path && "bg-sky-500 px-3 py-1"
                }`}
                key={path}
              >
                <Link to={path}>{name}</Link>
              </li>
            ))
          )}
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
