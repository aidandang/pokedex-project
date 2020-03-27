import React, { Component } from 'react'
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    let title;

    if (this.props.isWinner) {
      title = <h2 className="Pokedex-title-winner">WINNER HAND</h2>;
    } else {
      title = <h2 className="Pokedex-title-loser">LOSER HAND</h2>;
    }
    
    return (
      <div className="Pokedex">
        {title}
        <h3>Total Experience: {this.props.exp}</h3>
        <div className="Pokedex-cards">
          {this.props.pokemon.map(p => (
            <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
          ))}
        </div>
        
      </div>
    )
  }
}

export default Pokedex