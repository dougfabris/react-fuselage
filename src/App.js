import { Icon, Margins, Button, ButtonGroup, Chip, Throbber } from '@rocket.chat/fuselage';
import { useState } from 'react';
import { useAppData } from './hooks/useAppData';

import './App.css';
import '@rocket.chat/icons/dist/rocketchat.css';

const App = () => {
  const [text, setText] = useState(null);
  const { users, fetchUsers, isLoading } = useAppData();

  const handleClick = () => {
    setText('stop clicking me! Go to the docs and explore :)');

    setTimeout(() => {
      setText(null);
    }, 3000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img width={500} className="App-logo" src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="Rocket.Chat" style={{ maxWidth: '100%' }} />
        
        <p>This is a simple react boilerplate combined with Fuselage component's library, ready to use.</p>
        <p>Pick one of our pretty components like the <code>Button</code> below, edit <code>src/App.js</code> and save to reload.</p>
        <p><strong>Of course</strong>, our icons are here too <Icon name='brush' /><Icon name='brush' /><Icon name='brush' /></p>
      </header>

      <div className="playground">
        <Margins block='x8'>
          <ButtonGroup>
            <Button primary onClick={handleClick}>Button</Button>
            <Button primary onClick={fetchUsers}>Fetch Example</Button>
          </ButtonGroup>
        </Margins>
      </div>

      <div>{text}</div>

      {isLoading && (
        <Margins block='x8'>
          <Throbber />
        </Margins>
      )}

      {!isLoading && (
        <ul>
        {users?.map((user) => (
            <li style={{ listStyle: 'none' }} key={user.id}><Chip mbe='x8'>{user.name}</Chip></li>
          ))}
        </ul>
      )}
      
      <div>
        <a
          className="App-link"
          href="https://rocketchat.github.io/fuselage/fuselage/master/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Fuselage's Library
        </a>
      </div>
    </div>
  );
};

export default App;
