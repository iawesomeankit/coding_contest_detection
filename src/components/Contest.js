import React,{useState,useEffect} from 'react'
import {useParams} from "react-router";
import Card from './Card';
import "./contest.css"
import EmptyList from './EmptyList';
function Contest() {
    const {contestname} = useParams();
    const [contestData, setContestData] = useState([]);
    const [cData, setCData] = useState([]);
    const [val, setVal] = useState("");

      useEffect(() => {
        fetch(`https://kontests.net/api/v1/${contestname}`)
        .then( res => res.json())
        .then( data => {
            setContestData(data)
        })
      }, []);
    const handlepastClick=(tag)=>{
      const arr = contestData.filter((item)=> item.in_24_hours===tag && item.status!="CODING")
      setCData(arr);
      setVal("true");
      console.log(cData);
    }
    const handleliveClick=(tag)=>{
      const arr =  contestData.filter((item)=> item.status===tag)
      setCData(arr);
      setVal("false");
      console.log(cData);
    }
    const handlefutureClick=(tag)=>{
      const arr = contestData.filter((item)=> item.status===tag)
      setCData(arr);
      setVal("true");
      console.log(cData);
    }
  return (
    <div className='contestnames'>
      <div className='nav2'>{contestname}</div>
      <div className='head'>
        <a href='#in-24-hours' onClick={()=>handlepastClick("Yes")}>
           in 24 hours
        </a>
        <a href='#live' onClick={()=>handleliveClick("CODING")}>
        live
        </a>
        <a href='#future' onClick={()=>handlefutureClick("BEFORE")}>
        future
        </a>
        </div>
        {(cData.length==0)?<EmptyList/>:<Card cData={cData} val={val}/>}
    </div>
  )
}

export default Contest