import { useRoutes } from 'react-router-dom';
import ROUTES from './router';
function App() {
  const route = useRoutes(ROUTES);
  return route;
}

export default App;
