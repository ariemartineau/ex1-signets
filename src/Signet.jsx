import './Signet.scss';

export default function Signet(props) {
  return (
    <div className="Signet">
        <div className="image">
          <img src={'./images-signets/' + props.img} alt={props.titre}/>
        </div>
        <div className="info">
          <h3>{props.titre}</h3>
          <p className="dateModif">{props.dateModif}</p>
        </div>
    </div>
  );
}
