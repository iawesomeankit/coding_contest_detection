import React from 'react'
import "./card.css"
import { atcb_action, atcb_init } from 'add-to-calendar-button';
function Card({cData}) {
  const [name, setName] = React.useState("Some event");
  const changeName = e => {
    setName(e.target.value);
  };
  return (
    <div className='card'>
    {
        cData.map((item)=>
        <div className='card-child'>
          <div className='card-child-child'>
          <h1> <b>{item.name}</b></h1>
          <h1>duration : {item.duration/60}mins</h1>
          <h1>Start Date: {`${item.start_time.substring(0,10)+" "+(parseInt(item.start_time.substring(11,13))+5)+item.start_time.substring(13,16)}`}</h1>
          <h1>End Date: {`${item.end_time.substring(0,10)+" "+item.end_time.substring(11,16)}`}</h1> <br/>
          <a href={`${item.url}`} target="_black" className='card-a'><button class="button-54" role="button">visit</button></a>
          <div className='google-btn'>
          <form onSubmit={e => {
            e.preventDefault();            
            atcb_action({
              name:`${item.name}`,
              startDate:`${item.start_time.substring(0,10)}`,
              endDate: `${item.end_time.substring(0,10)}`,
              startTime:`${item.start_time.substring(11,16)}`,
              endTime:`${item.end_time.substring(11,16)}`,
              options: ['Google'],
              timeZone: "Asia/Kolkata",
              iCalFileName: "Reminder-Event",
            });
          }}>
            <input className='g-b' type="submit" value="Add To Calendar" />
          </form>
          </div>
          </div>
        </div>)}
    </div>
  )
}

export default Card