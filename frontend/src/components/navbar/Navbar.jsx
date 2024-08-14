import { Link, useLocation } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./navigation";
import { Container } from "../ui/Container";
import { useAuth } from "../../context/AuthContext";
import { twMerge } from "tailwind-merge";

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
                  className={twMerge(
                    "text-slate-300 flex items-center px-3 py-1",
                    location.pathname === path && "bg-sky-500"
                  )}
                  key={path}
                >
                  <Link to={path}>{name}</Link>
                </li>
              ))}

              <li
                className={"text-slate-300 flex items-center px-3 py-1 hover:cursor-pointer"}
                onClick={signout}
              >
                Logout
              </li>
            </>
          ) : (
            publicRoutes.map(({ path, name }) => (
              <li
                className={twMerge(
                  "text-slate-300 flex items-center px-3 py-1",
                  location.pathname === path && "bg-sky-500"
                )}
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
