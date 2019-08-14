// W JWT dac email bo wszystkie dzialania beda identyfikowane poprzez email lub wmongoSB zrobic referencje do usera, ważne też by byly dane o sesji w JWT, a do reduxa dac wszystkie dane dotyczace zalogowanego usera => name, surname, active
// Czyli dispatchowac zamienic pusty obiekt loggedUser: {} na => loggedUser: {name: 's', surname: 'sdd', active: true}
// Wtedy te dane bedziemy mogli sobie swobodnie z reduxa odebrac gdziekolwiek

import React from 'react';
import Bookings from '../../../../components/Home/Bookings/Bookings';

const FetchLoggedUser = (props) => {
   return (  
      <div>
         <Bookings />
         email logującego: 
         {props.location.payload.email}
      </div>
   );
}
 
export default FetchLoggedUser;

// import React from 'react';
// import axios from 'axios';

// import AuthEmailVerified from '../../Auth/AuthEmailVerified/AuthEmailVerified';
// import Bookings from '../Bookings/Bookings';

// odkomentowac calosC !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// TUTAJ BEDZIE REDUX lub JWT


// const VerifyUser = (props) => {
//    // Narazie maja byc ale potem sie wywali
//    const [active, setActive] = React.useState(Na POCZATKU M BYC NULL);
//    const [email, setEmail] = React.useState('');

//    // Polaczy sie z redux by pobrac dane o zalogowanym userze
//    React.useEffect(() => {
//       axios.get(`/api/${ID ZALOGOWANEGO USERA}/confirmEmail`)
//       // tutaj nie wiem czy cos zwracac potem ogarne 
//       .then(res => {
//          setEmail(res.data.email)
//          setActive(res.data.active)
//       })
//       // Bookings będzie wyświetlać już samo bookings
//       // Sciagniecie do reduxowego storea email bo wszystkie dzialania beda identyfikowane poprzez email lub wmongoSB zrobic referencje do usera
//    })


//    return (  
//       <div>
//           Na poczatku czy active nie jest null, jesli nie jest to co pokaze jak jest true a co jak jest false                    podczas sprawdzania niech zawsze jest maly spinner
//          {!STAN DOTYCZACY ACTIVE Z REDUXA POBRANEGO ? (
//                <AuthEmailVerified 
//                   email={email} 
//                   id={props.location.state.id}
//                />
//             ) : (
//                <Bookings />
//             )
//          }
//       </div>
//    );
// }
 
// export default VerifyUser;