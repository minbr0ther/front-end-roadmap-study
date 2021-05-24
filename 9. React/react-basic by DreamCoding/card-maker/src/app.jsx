import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Route } from "react-router-dom";

function App({ authService }) {
  return (
    <div class={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
