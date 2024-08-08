import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function HomePage() {
  const data = useAuth();
  console.log(data);
  return (
    <div>
      <Card>
        <h1 className="text-3xl font-bold my-4">Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          unde quidem ad quisquam qui. Recusandae accusantium iusto
          necessitatibus error voluptate. Voluptatibus minima ipsam dolorem
          perferendis quibusdam nam molestias cumque non minus, blanditiis
          praesentium optio, eaque fugit. Incidunt dolor provident ut?
        </p>
      </Card>
    </div>
  );
}

export default HomePage;
