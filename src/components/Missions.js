import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const todasAsMissoes = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />));

    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {todasAsMissoes}
      </div>
    );
  }
}

export default Missions;
