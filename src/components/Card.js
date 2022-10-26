import React, { useEffect } from 'react'
import "./card.css"
import { atcb_action, atcb_init } from 'add-to-calendar-button';
function Card({cData,val}) {
  const [name, setName] = React.useState("Some event");
  const [diftime, setDifTime] = React.useState("Some event");

  const changeName = e => {
    setName(e.target.value);
  };
  useEffect(()=>{
    // const a = new Date().getSeconds;
    setInterval(showDate,1000);
  },[diftime]);
  const showDate=()=>{
    setDifTime(new Date());
  }
  return (
    <div className='card'>
    {
        cData.map((item)=>
        <div className='card-child'>
          <div className='card-child-child'>
          <h1 className='item-name'> <b>{item.name.toUpperCase()}</b></h1>
          <h1 className='duration'> <b>Duration :</b> {item.duration/60}mins</h1>
          <h1 className='start-date'> <b>Start Date: </b>{`${new Date(item.start_time).toLocaleString()}`}</h1>
          <h1 className='end-date'><b>End Date: </b> {`${new Date(item.end_time).toLocaleString()}`}</h1> <br/>
          {
            (val=="true")?<h1 className='starts-in'><b>Contest Starts in:</b> {Math.floor((new Date(item.start_time)-new Date())/1000/60/60/24)}days {Math.floor((new Date(item.start_time)-new Date())/1000/60/60%24)}hours {Math.floor((new Date(item.start_time)-new Date())/1000/60%60)}minutes  {Math.floor((new Date(item.start_time)-new Date())/1000%60)}s</h1>:""
          }
          <a href={`${item.url}`} target="_black" className='card-a'><button class="button-54" role="button">visit</button></a>
          <div className='google-btn'>
          <form onSubmit={e => {
            e.preventDefault();            
            atcb_action({
              name:`${item.name}`,
              startDate:`${item.start_time.substring(0,10)}`,
              endDate: `${item.end_time.substring(0,10)}`,
              startTime:`${new Date(item.start_time).toTimeString().substring(0,5)}`,
              endTime:`${new Date(item.end_time).toTimeString().substring(0,5)}`,
              options: ['Google'],
              timeZone: "Asia/Kolkata",
              iCalFileName: "Reminder-Event",
            });
          }}>
            <input className='g-b' type="submit" value="Add To Calendar" />
          </form>
          </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default Card