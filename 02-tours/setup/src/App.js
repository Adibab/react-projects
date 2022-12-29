import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const[loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

const deleteTour = (id) => {
const newTourArray = tours.filter((tour)=> tour.id !== id )
 setTours (newTourArray)
  }
  const refresh = () => {
    fetchTours();
  };

 
const fetchTours = async () => {
  setLoading(true)

  try{
    const response = await fetch(url);
    const tours = await response.json();
   setTours (tours);
      setLoading(false);

  } catch (error) {
     setLoading(false) 
     console.log(error)
  }

};

  useEffect(() => {
    fetchTours();
    // fetch(`https://course-api.com/react-tours-project`)
    // .then((res) => res.json())
    // .then((tours) => console.log(tours))
    // setLoading(true)
  }, []);

 
if (loading) {
  return (
    <main>
      <Loading />
    </main>
  );
}
if ( tours.length === 0){
  return (
    <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={refresh}>
          Refresh
        </button>
      </div>
    </main>
  );
}

  return (
    <div>
      {/* <h2>Our Tours</h2> */}
      < Tours tours= {tours} deleteTour={deleteTour} />
    </div>
  );
}

export default App
