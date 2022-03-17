import { routers } from "Routes/Router";
import Card from "components/core/Card";

export default function Home() {
  return (
    <div className="container">
      <nav className="card__nav">
        <ul>
          {routers.slice(1).map((route) => (
            <Card key={route.path} {...route} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
