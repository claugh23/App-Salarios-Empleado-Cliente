import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaginaPrincipal from '../components/PaginaPrincipal/PaginaPrincipal.component';
import AgregarEmpleado from '../components/AgregarEmpleado/AgregarEmpleado.component';
import VerEmpleados from '../components/VerEmpleados/VerEmpleados.component';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={PaginaPrincipal} />
          <Route path="/AgregarEmpleados" component={AgregarEmpleado} />
          <Route path="/VerEmpleados" component={VerEmpleados} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
