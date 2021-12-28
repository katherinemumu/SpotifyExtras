import React from 'react';

function UserHome(props) {
    const token = props.auth.token;

    return (
        <div className="App">
            <header className="App-header">
                <p>Hello!</p>
            </header>
        </div>
    )
}

export default UserHome;