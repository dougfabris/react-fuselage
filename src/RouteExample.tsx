import { Margins, Button, ButtonGroup } from '@rocket.chat/fuselage';
import React from 'react';

import { useNavigate } from 'react-router';

const RouteExample = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img width={500} className="App-logo" src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="Rocket.Chat" style={{ maxWidth: '100%' }} />
        
        <p>This is a route example.</p>
      </header>

      <div className="playground">
        <Margins block='x8'>
          <ButtonGroup>
            <Button primary onClick={() => navigate('/')}>Go back</Button>
          </ButtonGroup>
        </Margins>
      </div>
    </div>
  );
};

export default RouteExample;
