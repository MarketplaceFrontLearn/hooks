import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import StateHook from './hooks/useState/useState'
function AppRouter() {
    return (
        <Switch>
            <Route path="/useState">
                <StateHook/>
            </Route>
        </Switch>
    )
}

export default AppRouter;