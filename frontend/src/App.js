// // frontend/src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import Transactions from './components/Transactions';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />
//           <Route path="/transactions" component={Transactions} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

// frontend/src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './components/Login';
// import Transactions from './components/Transactions';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <h1>Welcome to the Personal Budgeting</h1>
//         <Routes>
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/transactions" element={<Transactions />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import AddTransaction from './components/AddTransaction'; // Import the new component
import Transactions from './components/Transactions';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-transaction" element={<AddTransaction />} />
          <Route path="/transactions" element={<Transactions />} /> {/* New route */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

