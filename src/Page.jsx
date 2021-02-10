import './Page.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';

export default function Page() {
  return (
    <div className="Page">
        <Entete/>
        <section className="contenuPrincipal">
            <ListeSignets/>
        </section>
    </div>
  );
}
