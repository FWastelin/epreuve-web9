import { useState } from 'react';
//import Modal from './Modal';



function App() {
  //const [ModalVisible, setModalVisible] = useState(false);
  return (
    <div className="App">
      <header>
        <div className='logo'><img src={`images/logo.png`} alt={`logo maison salvi`} className='img-logo'/></div>
      </header>
      <main>
        <section className='menu'>
            <div className='contenu-menu'>
              <div className='texte'>
                <img src={`images/2.jpg`} alt={`curry de legumes`} className='img-curry'/>
                <p>La Maison Salvi vous offre chaque jour le choix entre un menu carné ou végé: 10€ livraison incluse (sur Rennes uniquement).</p>
                <p>Des produits sains et simples, de saison, mis en musique et en couleur par le chef Pablo. Qui d'autre aurait pu réconcilier la famille autour d'une idée aussi simple et chaleureuse?</p>
                <p>Il est temps de passer commande</p>
                <button className='btn-menu' >MENU DU JOUR</button>
                {/* mit dans la balise button en haut avt className : onClick={ () => setModalVisible(true)*/} 
                {/*<Modal title='main'visible={ModalVisible}></Modal>*/}
              </div>
              <div className='photo'>
                <img src={`images/cuistot1.jpg`} alt={`cuistot Pablo`} className='img-cuistot'/>
              </div>
            </div>
            <div className='rond-orange'></div>
            <div className='rond-hachure'></div>
        </section>
        <section className='archive'>
          <div className='contenu-archive'>
            <h1 className='archives'> Archives</h1>
            <h1 className='gustatives'> Gustatives</h1>
            <p>Un menu de la Maison Salvi vous a séduit? Vous refusez de croire qu'il ne reviendra pas à la carte?</p>
            <p>Je vous propose de passer en revue les recttes, et donner votre avis. Choisissez votre favori !</p>
            <button className='btn-voter'>VOTER</button>
          </div>
          <div className='contenu-logo'>
            <div className='conteneur-tache'>
              <img src={`images/splash.svg`} alt={`tache orange`} className='tache-orange'/>
              <img src={`images/suri02.jpg`} alt={`sourit cuisto2`} className='img-suri2'/>
            </div>
          </div>
        </section>
        <section className='contenu-img'>
        <img src={`images/1.jpg`} alt={`entrée`} className='img1'/>
        <img src={`images/2.jpg`} alt={`plat`} className='img2'/>
        <img src={`images/3.jpg`} alt={`dessert`} className='img3'/>
        </section>
      </main>
      <footer>
        <div className='texte-footer'>
          <a href='https://www.interface3.be/'>Interface3</a>
          <p>Créer avec passion par  </p>
          <a href='https://www.interface3.be/fr/formation/web-application-developer'> La Team WEB09</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
