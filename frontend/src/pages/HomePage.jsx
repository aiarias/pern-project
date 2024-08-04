import { useAuth } from "../context/AuthContext";

function HomePage() {
    const data = useAuth()
    console.log(data);
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
}

export default HomePage;