


function App() {
  return (
    <div className="App">
      <header>
        <div className='logo'><img src={`images/logo.png`} alt={`logo maison salvi`} className='img-logo'/></div>
      </header>
      <main>
        <section className='menu'>
            <div className='contenu-menu'>
              <article className='texte-menu'>
                <div className='conteneur-Img-cury'><img src={`images/cury_de_legume.jpg`} alt={`cury de legumes`} className='img-cury'/></div>
              </article>
              <article className='img-cuisto'>
                <div className='conteneur-Img-cuisto'><img src={`images/cuistot1.jpg`} alt={`cuisto`} className='img-cuisto'/></div>
               </article>
            </div>
        </section>
        <section className='archive'>
          <div className='contenu-archive'>
            <h1 className='archives'> Archives</h1>
            <h1 className='gustatives'> Gustatives</h1>
            <p>Un menu de la Maison Salvi vous a séduit? Vous refusez de croire qu'il ne reviendra pas à la carte?</p>
            <p>Je vous propose de passer en revue les recttes, et donner votre avis. Choisissez votre favori !</p>
            <button className='btn-voter'>voter</button>
          </div>
          <div className='contenu-logo'></div>
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
