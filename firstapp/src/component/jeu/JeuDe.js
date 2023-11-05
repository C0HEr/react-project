import React, { Component } from "react";

export class JeuDe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nbr: 0,
      rand: 0,
    };
  }

  essais = () => {
    if (this.state.rand < 6) {
      this.setState({
        nbr: this.state.nbr + 1,
        rand: Math.floor(Math.random() * 6) + 1,
      });
    } else {
      this.setState({
        nbr: 0,
        rand: 0,
      });
    }
  };

  render() {
    let rand = this.state.rand,
      win = this.props.win;
    return (
      <>
        <div className={rand === win ? "card w-25 m-auto bg-info" : "card w-25 m-auto " }>
          <h4 className="card-title m-4 text-center">Jeu de De ..</h4>
          <img
            className="p-3 mx-auto"
            src={"images/jeuDe/face" + rand + ".png"}
            alt="Jeu De"
            width={100}
            height={100}
          />
          <div className="card-body">
            <h6 className="card-title bold">{rand > 0 && 'Face : '+ rand} </h6>
            <h6 className="card-title bold">
              Nombre d'essais: {this.state.nbr}{" "}
            </h6>

            <button
              className="btn btn-outline-primary w-100 mt-2"
              onClick={() => this.essais()}
            >
              {rand === win ? "Init" : "Jouer"}
            </button>
          </div>
        </div>
        {rand === win && (
          <p className="text-center my-2 text-success">
            Bravo vous avez trouver la face cachée ...{" "}
          </p>
        )}
      </>
    );
  }
}

export default JeuDe;
