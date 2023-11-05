import React, { Component } from 'react'

class Conteneur extends Component {

    constructor(props) {
        super(props);
        this.state = {
            compteur : 1
        }
    }

    count(x){
        let sign = x === '+'?+1:-1,
            val = this.state.compteur + sign;

        this.setState({
            compteur: val
        })
    }

    render() {
        return (
            <div className="card mb-2">
                <div className="card-header d-flex justify-content-between  align-items-center">
                    <h6 className="mb-0">{this.props.title} : { this.state.compteur } </h6>
                    <div>
                        <button className="btn btn-primary mx-2" onClick={()=>this.count('+')}>+</button>
                        <button className="btn btn-primary" onClick={()=>this.count('-')}>-</button>
                    </div>
                   
                </div>
                <div className="card-body">
                    <img src={this.props.img} class="rounded-circle" alt={this.props.title} width={100} height={100} />
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        )
    }
}

export default Conteneur