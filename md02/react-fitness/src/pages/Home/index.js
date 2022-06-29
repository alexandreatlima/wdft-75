import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
      <h1>React Training</h1>
      <p>NO PAIN NO GAIN</p>

      <Link to="/create-training">
        <button className="btn btn-primary">Criar um treino</button>
      </Link>
    </>
  );
}
