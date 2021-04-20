import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StateHook from "./hooks/useState/useState";
import EffectHook from "./hooks/useEffect/useEffect";
import LayoutEffectHook from "./hooks/useLayoutEffect";
import UseMemoComponent from "./hooks/useMemo";
import UseMemoHook from "./hooks/useMemo/useMemoHook";
import UseCallbackHook from "./hooks/useCallback";
import * as React from "react";
import ContextHook from "./hooks/useContext";
import ImperativeHandleHook from "./hooks/useImperativeHandle";
import UseMemoExample from "./hooks/useMemo/example/useMemoExamle";
import CustomHooks from "./hooks/CustomHooks";
import EffectRule from "./hooks/useEffect/rules";

export const AppContext = React.createContext();


const appState = {
  appName: 'hooks'
}

function App() {
  return (
	<Router>
	  <div>
		<AppContext.Provider value={appState}>
		  <nav>
			<ul>
			  <div>
				<h1>Мейн эффекты</h1>
				<li>
				  <Link to="/useState">useState</Link>
				</li>
				<li>
				  <Link to="/useEffect">useEffect</Link>
				</li>
			  </div>
			  <div>
				<h1>Доп эффекты</h1>
				<li>
				  <Link to="/useLayoutEffect">useLayoutEffect</Link>
				</li>
				<li>
				  <Link to="/useMemoComponent">React.Memo</Link>
				</li>
				<li>
				  <Link to="/useMemoHook">useMemo</Link>
				</li>
				<li>
				  <Link to="/useCallbackHook">useCallback</Link>
				</li>
				<li>
				  <Link to="/useContextHook">useContext</Link>
				</li>
				<li>
				  <Link to="/useImperativeHandle">useImperative</Link>
				</li>
				<li>
				  <Link to="/useMemoExample">useMemoExample</Link>
				</li>
				<li>
				  <Link to="/useCallbackExample">useCallbackExample</Link>
				</li>
				<li>
				  <Link to="/customHooks">customHooks</Link>
				</li>
				<li>
				  <Link to="/EffectRule">EffectRule</Link>
				</li>
			  </div>
			</ul>
		  </nav>
		  
		  <Switch>
			<Route path="/useState">
			  <StateHook/>
			</Route>
			<Route path="/useEffect">
			  <EffectHook/>
			</Route>
			<Route path="/useLayoutEffect">
			  <LayoutEffectHook/>
			</Route>
			<Route path="/useMemoComponent">
			  <UseMemoComponent/>
			</Route>
			<Route path="/useMemoHook">
			  <UseMemoHook/>
			</Route>
			<Route path="/useCallbackHook">
			  <UseCallbackHook/>
			</Route>
			<Route path="/useContextHook">
			  <ContextHook/>
			</Route>
			<Route path="/useImperativeHandle">
			  <ImperativeHandleHook/>
			</Route>
			<Route path="/useMemoExample">
			  <UseMemoExample/>
			</Route>
			<Route path="/useCallbackExample">
			  <UseMemoExample/>
			</Route>
			<Route path="/customHooks">
			  <CustomHooks/>
			</Route>
			<Route path="/EffectRule">
			  <EffectRule/>
			</Route>
		  </Switch>
		</AppContext.Provider>
	  </div>
	</Router>
  );
}

export default App;
