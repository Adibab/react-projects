import React from 'react';
import Tour from './Tour';
const Tours = ( {tours, deleteTour}) => {

  return (
    <section>
      <div className="title">
        <h2> Our Tours</h2>
        <div className="underline"> </div>
      </div>
      <div> 
        {tours.map((tour)=> { return (
          <Tour key={tour.id} {...tour} deleteTour={deleteTour} />
          // to get the access of all the objects of tour component we have used spread operator
         )})}
      </div>
    </section>
  );
};

export default Tours;
