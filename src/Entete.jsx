import './Entete.scss';

export default function Entete() {
  return (
    <header className="Entete">
        <div className="titrePage">Signets</div>
        <ul className="navUtil">
          <li>Ariane Laferrière-Martineau</li>
          <li><img src="./utilisateur.png" alt="imgProfil"/></li>
        </ul>
    </header>
  );
}
