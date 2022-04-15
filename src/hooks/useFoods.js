import { useEffect, useState } from "react"

const useFoods = () =>{
          const [breakfast , setBreakfast] = useState([]);
          const [launch , setLaunch] = useState([]);
          const [dinner , setDinner] = useState([]);

          useEffect(()=>{
                    fetch('Breakfast.json')
                    .then(res =>res.json())
                    .then(data => setBreakfast(data))
          },[])

          useEffect(()=>{
                    fetch('launch.json')
                    .then(res =>res.json())
                    .then(data => setLaunch(data))
          },[])

          useEffect(()=>{
                    fetch('dinner.json')
                    .then(res =>res.json())
                    .then(data => setDinner(data))
          },[]);

          return [breakfast , launch , dinner]

}

export default useFoods;