import ReactDOM from 'react-dom';
//inside any component or files that use jsx, the react package is used. We dont need to include it, since things have changed throughout the project.
//But essentially this is done to avoid confusing code where we would have to use React.createElement, so instead to make it easier and more readable/legible,
//We could just write JSX code.
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
