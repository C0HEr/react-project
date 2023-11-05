// import Conteneur from './component/Conteneur';
// import Article from "./component/Article";
// import ButtonReact from "./component/ButtonReact";
//import TestUseseState from "./component/hooks/TestUeseState";
//import JeuDe from "./component/jeu/JeuDe";
import Villes from "./component/hooks/Villes";

function App() {
  // const list = "https://www.hespress.com/json/clean_box_article_list"
  // console.log(list)
  // const manipulerClique = () => {
  //   alert("Resultat de la fonction manipuler clique !!");
  // }

  return (
    <div className="container mt-5">
      {/* <Conteneur title="Profile" img="images/img1.jpg" />
      <Conteneur title="Animale" img="images/img2.jpg" /> */}
      {/* <h1> Comprendre les props : </h1> */}
      {/* {
        list.map((item) => {
            console.log(item);
        })
      } */}
      {/* <ButtonReact disabled={false} nom='btn1' onClick={()=>manipulerClique()}> 
        Click here 
      </ButtonReact>
      <ButtonReact disabled={true} nom='btn2'> Initialiser </ButtonReact>
      <Article id={1} title="Article 1" auteur="Auteur 1">
        <p>
          Integer tincidunt. Suspendisse eu ligula. Vivamus aliquet elit ac
          nisl. Quisque ut nisi. Phasellus tempus. Nullam nulla eros, ultricies
          sit amet, nonummy id, imperdiet feugiat, pede. Praesent ac sem eget
          est egestas volutpat. Donec vitae orci sed dolor rutrum auctor. Nunc
          nulla. Curabitur blandit mollis lacus.
        </p>
      </Article>
      <Article id={2} title="Article 2" auteur="Auteur 2">
        <p>
          Integer tincidunt. Suspendisse eu ligula. Vivamus aliquet elit ac
          nisl. Quisque ut nisi. Phasellus tempus. Nullam nulla eros, ultricies
          sit amet, nonummy id, imperdiet feugiat, pede. Praesent ac sem eget
          est egestas volutpat. Donec vitae orci sed dolor rutrum auctor. Nunc
          nulla. Curabitur blandit mollis lacus.
        </p>
      </Article> */}

      {/* <JeuDe win={6} /> */}
      {/* <TestUseseState/> */}
      <Villes/>
    </div>
  );
}

export default App;
