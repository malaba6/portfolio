import { Switch, Route } from 'react-router-dom';
import HomePage from './home';

const App = () =>
  <>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </>
;

export default App;
