import React, { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home"
import Login from "./Login"
import UserHome from "./UserHome";
import Loading from "./Loading";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// class App extends Component {
//
//   render() {
//     return (
//         <div>
//             <NavBar />
//             <Switch>
//                 <Route path='/' component={Home} exact/>
//                 <Route path='/login' component={Login} exact/>
//                 <Route path='/userhome' component={UserHome} exact/>
//             </Switch>
//         </div>
//     );
//   }
// }

function App() {
    const [auth, setAuth] = useState(null);

    if(auth == null) {
        <Loading/>
    } else if (auth) {
        <UserHome/>
    }
    return <Home/>
}

export default App;