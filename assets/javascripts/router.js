import { create, HistoryLocation } from 'react-router';
import routes from './routes';

export default create(
  {
    location: HistoryLocation,
    routes: routes
  }
)
