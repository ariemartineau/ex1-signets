import './ListeSignets.scss';
import Signet from './Signet.jsx';
import tabSignets from './data/signets.json'

export default function ListeSignets(props) {
  return (
    <div className="ListeSignets">
      <ul>
        {
          tabSignets.map((sig) =>
            <Signet key={sig.id} id={sig.id} titre={sig.titre} dateModif={sig.dateModif} img={sig.image} />
          )
        }
      </ul>
    </div>
  );
}
