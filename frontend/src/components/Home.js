// // frontend/src/components/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Home.css';

// // import budgetImg from "/images/budget-management-accounts_603843-1682.jpg"
// // import financeImg from "../../images/istockphoto-1399582867-1024x1024.jpg"
// import budgetImg from "./../images/budget-management-accounts_603843-1682.jpg"
// import financeImg from "./..//images/istockphoto-1399582867-1024x1024.jpg"


// function Home() {
//   return (
//     <div className="home-container">
//       <nav className="navbar">
//         <h1>Personal Budget App</h1>
//         <div>
//           <Link to="/login" className="btn">Login</Link>
//           <Link to="/register" className="btn">Register</Link>
//         </div>
//       </nav>
//       <div className="home-content">
//         <h2>Welcome to the Personal Budget App</h2>
//         <p>Manage your finances effortlessly.</p>
//         <Link to="/about" className="btn btn-about">About Us</Link>
//         <div className="image-container">
//           <img src={budgetImg} alt="Budget" />
//           <img src={financeImg} alt="Finance" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// frontend/src/components/Home.js



// frontend/src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import budgetImg from "./../images/budget-management-accounts_603843-1682.jpg"
import financeImg from "./..//images/istockphoto-1399582867-1024x1024.jpg"

function Home() {
  const quotes = [
    "An investment in knowledge pays the best interest. – Benjamin Franklin",
    "Beware of little expenses; a small leak will sink a great ship. – Benjamin Franklin",
    "The best way to predict your future is to create it. – Peter Drucker",
    "Do not save what is left after spending, but spend what is left after saving. – Warren Buffett",
    "It’s not how much money you make, but how much money you keep. – Robert Kiyosaki",
  ];

  return (
    <div className="home-container">
      <nav className="navbar">
        <h1>Personal Budget App</h1>
        <div>
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Register</Link>
        </div>
      </nav>
      <div className="home-content">
        <h2>Welcome to the Personal Budget App</h2>
        <p>Manage your finances effortlessly.</p>
        <Link to="/about" className="btn btn-about">About Us</Link>
        <div className="image-container">
          <img src={budgetImg} alt="Budget" />
          <img src={financeImg} alt="Finance" />
        </div>
        <div className="quotes-container">
          <h3>Best Quotes About Finances</h3>
          <ul className="quotes-list">
            {quotes.map((quote, index) => (
              <li key={index} className="quote-item">
                <i className="fas fa-quote-left quote-icon"></i>
                {quote}
                <i className="fas fa-quote-right quote-icon"></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;


