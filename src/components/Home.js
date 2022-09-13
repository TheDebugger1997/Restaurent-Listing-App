import React from 'react'
import {useState,useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import {listRestaurants} from '../actions/restaurantAction'
import {useDispatch, useSelector} from 'react-redux'
function Home() {

    //const [items,setItems] = useState([])

//const fetchData = async () => {
   // await fetch('/restaurants.json')
   // .then((res)=>res.json())
   // .then((data)=> setItems(data.restaurants))
//}

const dispatch = useDispatch()

const result = useSelector(state => state.restaurantReducer)

const {restaurant} = result

useEffect(()=>{
  dispatch(listRestaurants())
},[])

  return (
    <Row>
      {restaurant.map((item)=>(
<Col sm={12} md={8} lg={6} xl={3}>
    <RestaurantCard data = {item}/>
</Col>
        ))}
    </Row>
  )
}

export default Home

//asynchronous function - api functions
//async await - 
//fetch() - 
//axios - 
//asynchronous function return a promise -
//fulfilled,pending,reject:-promise
 


// another hook - useEffect()

//lifecycle method of a component - 
//mounting,updating and unmounting
//mounting - componentDidMount()
//unmounting - componentDidUnmount()
//updating - componentDidUpdate()

