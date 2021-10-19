import { useEffect } from 'react';
import * as C from './App.styles';
import { Char } from './components/char';
import { useChar } from './hooks/useChar';

const App = () => {
  const char = useChar('Raphael');
  const char2 = useChar('Boniecky');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
      break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Char x={char.x} y={char.y} side={char.side} name={char.name} />
        <Char x={char2.x} y={char2.y} side={char2.side} name={char2.name} />
      </C.Map>
    </C.Container>
  );
}

export default App;