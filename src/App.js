import Todo from './Component/TD1/Todo'

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
 
      <Todo></Todo>
    </div>
    </ChakraProvider>
    
  );
}

export default App;
