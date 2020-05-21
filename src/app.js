import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    state = {
      count: 0
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Hello Albert</h1>
                <h2 className={count > 10 ? 'warning' : null}>
                    Count: {count}
                </h2>
                <button onClick={() => this.setState((prevState, props) => ({count: prevState.count + 1}))}>+</button>
                <button onClick={() => this.setState((prevState, props) => ({count: prevState.count - 1}))}>-</button>
            </div>
        )
    }
}

export default hot(module)(App);