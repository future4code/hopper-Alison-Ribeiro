import './App.css';
import logoMarca from "./img/YouTube_icon.png"
import inicio from "./img/inicio.png"
import explorar from "./img/explorar.png"
import inscricoes from "./img/inscricoes.png"
import historico from "./img/historico.png"
import originais from "./img/originais.png"
import addvideo from "./img/addvideo.png"
import apptube from "./img/apptube.png"
import notificacoes from "./img/notificacoes.png"
import avatar from "./img/avatar.png"



function App() {

  const titulo = "Titulo do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div>
        <div className="tela-inteira">
          <header>
              <div className="tituloMarca">
                <img src={logoMarca} className="logoMarca"/><h1>LabTube</h1>
              </div>
              <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
              <div>
                <img src={addvideo} className="iconestop"/>
                <img src={apptube} className="iconestop"/>
                <img src={notificacoes} className="iconestop"/>
                <img src={avatar} className="iconestop"/>
              </div>
          </header>

          <main>
              <nav className="menu-vertical">
                  <ul>
                      <li className="botoes-meunu-vertical"><img src={inicio} className="iconeMenu" />Início</li>
                      <li className="botoes-meunu-vertical"><img src={explorar} className="iconeMenu" />Em alta</li>
                      <li className="botoes-meunu-vertical"><img src={inscricoes} className="iconeMenu" />Inscrições</li>
                      <hr />
                      <li className="botoes-meunu-vertical"><img src={historico} className="iconeMenu" />Originais</li>
                      <li className="botoes-meunu-vertical"><img src={originais} className="iconeMenu" />Histórico</li>
                  </ul>
              </nav>

              <section className="painel-de-videos">
                  <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=1 " className="thumb" alt="" />
                      <h4 className="tituloVideos">{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=2 " className="thumb" alt="" />
                      <h4 className="tituloVideos">{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=3 " className="thumb" alt="" />
                      <h4 className="tituloVideos">{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=4 " className="thumb" alt="" />
                      <h4 className="tituloVideos">{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=5 " className="thumb" alt="" />
                      <h4 className="tituloVideos">{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=6 " className="thumb" alt="" />
                      <h4 className="tituloVideos">{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=7 " className="thumb" alt="" />
                      <h4 className="tituloVideos">{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=8 " className="thumb" alt="" />
                      <h4 className="tituloVideos">{titulo}</h4>
                  </div>
              </section>
          </main>

      </div>


    </div>

  );
}

export default App;
