 import './App.css';

// import Person from "./Person";

// function App() {
//   return (
//     <div>
//         <Person />
//         <Person />
//         <Person />
//     </div>
//   );
// };

// export default App;

// import Job from "./Job";


// function App() {
//   return (
//     <div>
//       <Job jobTitle="Junior Developer" />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Cars from "./Cars";
import classic from "./assets/classic-car.jpg";
import elegant from "./assets/elegant-car.jpg";
import muscle from "./assets/muscle-car.jpg";
import sport from "./assets/sport-car.jpg";

class App extends React.Component {
    render() {
    return (
        <div className="container">
            <h1>What would you drive?</h1>
            <Cars
            picture={classic} pictureAlt="classic-car" pictureId="classic"
            carsType="Old fashioned cars" 
            paraId="ofc"
            />
             <Cars
            picture={elegant} pictureAlt="elegant-car-car" pictureId="elegant"
            carsType="Elegant cars"
            paraId="ec"
            />
             <Cars
            picture={muscle} pictureAlt="muscle-car" pictureId="muscle"
            carsType="Muscle cars"
            paraId="mc" 
            />
             <Cars
            picture={sport} pictureAlt="sport-car" pictureId="sport"
            carsType="Sport cars" 
            paraId="sc"
            />
        </div>
    )
}
}

export default App;
