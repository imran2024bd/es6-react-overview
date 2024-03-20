import { useEffect, useState } from 'react'

import './App.css'
import Watch from './components/watch/Watch'

function App() {
  const [watches , setWatches] = useState([]);

  // from memory data
  // useEffect(()=> {
  //   fetch('watches.json')
  //   .then(res => res.json())
  //   .then ( data => setWatches(data));
  // },[])

// raw data from git hub link
  useEffect(()=> {
    fetch('https://raw.githubusercontent.com/imran2024bd/watches-json-data/main/watches.json')
    .then(res => res.json())
    .then ( data => setWatches(data));
  },[])




  // const watches =[
  //   {id: 1, name: 'Apple watch', price: 200},
  //   {id: 2, name: 'Samsung watch', price: 200},
  //   {id: 3, name: 'MI watch', price: 200},
  // ]


//   const watches = [
//     {
//         id: 1,
//         name: "Apple Watch Series 7",
//         price: 399
//     },
//     {
//         id: 2,
//         name: "Galaxy Watch 4",
//         price: 249
//     },
//     {
//         id: 3,
//         name: "Fitbit Sense",
//         price: 299
//     },
//     {
//         id: 4,
//         name: "Garmin Venu 2",
//         price: 399
//     },
//     {
//         id: 5,
//         name: "Huawei Watch GT 3",
//         price: 199
//     }
// ];

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key ={watch.id} watch ={watch}></Watch>)
      }
    </>
  )
}

export default App


// free open API link 
// https://github.com/public-apis/public-apis
// free mock api 
// https://beeceptor.com/
// swagger api
// https://swagger.io/