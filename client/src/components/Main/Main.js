import { Switch, Route } from 'react-router-dom';
import UserHome from '../UserHome/UserHome';
import Playlists from '../Playlists/Playlists';
import Wrapped from '../Wrapped/Wrapped';

function Main(props) {
    return (
        <div>
            <Switch>
                {/*<Route path={"/"}>*/}
                {/*    <UserHome/>*/}
                {/*</Route>*/}
                <Route path={"/wrapped"}>
                    <Wrapped/>
                </Route>
                <Route path={"/playlists"}>
                    <Playlists/>
                </Route>
            </Switch>
        </div>
    );
}

export default Main;