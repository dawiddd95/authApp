import React from 'react';

const Bookings = ({bookings}) => {
   return (  
      <div>
         {bookings.user.name} : {bookings.user.surname} : {bookings.user.email}
         {/* tutaj mialny juz swoje komponenty 
               Navigation z paskiem gornym       => {  Takie powtarzalne komponenty w kazdej podstronie dac luzem wHome jako foldery luzne
               sideMenu z paskiem lewym bocznym => {
               formularz dodawania BookingsAddForm
               lista istniejacych BookingsList
         */}
      </div>
   );
}
 
export default Bookings;