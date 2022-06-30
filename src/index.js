import './index.css';
import Games from './Games';
import { data } from './gamesData';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

const GamesList = () => {
  return (
    <div className='games'>
      {data.map((game) => {
        return <Games key={game.id} {...game}></Games>;
      })}
    </div>
  );
};

root.render(<GamesList tab='home' />);
