import React from 'react'
import "./home.css"
import {platformList} from "../data" 
import HomeList from './HomeList'
import {useState} from "react";
function Home() {
  // console.log(platformList);
  const [listData,setListData] = useState(platformList);
  return (
    <div className='home'>
      {
        listData.map((item,id)=>
          <HomeList item={item} />
        )
      }
    </div>
  )
}

export default Home