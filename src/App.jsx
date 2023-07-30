import { useEffect, useState } from "react";
import { Tours } from "./Tours";
const API_LINK = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    try {
      const response = await fetch(API_LINK)
      const tours = await response.json()
      setTours(tours);
      console.log(tours);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTours()
  }, [])



  return (
    <main>
      <Tours />
    </main>
  )
};
export default App;
