import { Navigate, Outlet } from "react-router-dom";



export const ProtectedRoute = ({redirectTo, isAllowed, children}) => {
    //esto lo que hace es que si no esta autenticado lo redirige a la pagina de login
    if (!isAllowed) return <Navigate to={redirectTo} replace/>
    return children ? children : <Outlet/>;
}