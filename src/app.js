import React from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning'));

class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello Albert</h1>
        <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }))
          }
        >
          +
        </button>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              count: prevState.count - 1,
            }))
          }
        >
          -
        </button>

        {count > 3 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}

export default hot(module)(App);
