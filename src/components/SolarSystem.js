import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const todosOsPlanetas = Planets.map(({ name, image }) => (<PlanetCard
      key={ name }
      planetName={ name }
      planetImage={ image }
    />));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {todosOsPlanetas}
      </div>
    );
  }
}

export default SolarSystem;
