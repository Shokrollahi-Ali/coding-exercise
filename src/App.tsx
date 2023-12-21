import ApiProvider from 'providers/api';
import MessageProvider from 'providers/message';
import ContainerProvider from 'providers/container';
import Router from 'routers';

function App() {
  return (
    <ApiProvider>
      <MessageProvider>
        <ContainerProvider>
          <Router />
        </ContainerProvider>
      </MessageProvider>
    </ApiProvider>
  );
}

export default App;
