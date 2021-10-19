import * as C from './App.styles';
import { Char } from './components/char';

const App = () => {
  return (
  <C.Container>
    <C.Map>
      <Char />
    </C.Map>
  </C.Container>
  );
}

export default App;