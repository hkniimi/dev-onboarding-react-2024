/**
 * App.jsx
 * @author By: Gabriel Sessions - JumboCode Fall 2024
 * 
 * @description This function controls which page renders on your web browser.
 * If you're at the root path `/`, HelloPage is rendered
 * If you're at the `/tic-tac-toe` path, TicTacToePage is rendered
 * If you're at some other undefined page, you'll get a 404 error
 */

/**
 * Imports used to route the user to the right page and 
 * render components.
 */
import { Route, Switch } from "wouter";
import HelloPage from "./pages/HelloPage";
import TicTacToePage from "./pages/TicTacToePage";

export default function App() {
  return (
    <>
      <Switch>
        {/* Displays a basic welcome page when the path is / */}
        <Route path="/" component={HelloPage} />

        {/* Displays a Tic-Tac-Toe game when the path is /tic-tac-toe */}
        <Route path="/tic-tac-toe" component={TicTacToePage} />
        
        {/* Shows a 404 error if the path doesn't match anything */}
        {
          <Route>
            <p className="p-4">404: Page Not Found</p>
          </Route>
        }
      </Switch>
    </>
  );
}



