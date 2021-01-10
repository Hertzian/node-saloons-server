document.addEventListener('DOMContentLoaded', function(){
  let $calendar = document.getElementById('calendar')
  let calendar = new FullCalendar.Calendar($calendar, {
    initialView: 'dayGridMonth',
    dateClick: openModal,
    locale: 'es',
    locales: 'es',
    showNonCurrentDates: false,
    eventSources: [events2, events3]

  })

  calendar.render()
})

let events = [
  {
    events: [
      {
        title  : 'ir con las gordas',
        start  : '2020-08-01'
      },
      {
        title  : 'mas gordas',
        start  : '2020-08-05',
        end    : '2020-08-07'
      },
      {
        title  : 'esas pinchis gordas',
        start  : '2020-08-09T12:30:00',
        allDay : false // will make the time show
      }
    ],
    color: 'pink',     // an option!
    textColor: 'gray' // an option!
  }
]

let events2 =   {
  events: [
    {
      title: 'pos es un ejemplo',
      start: '2020-08-03'
    }
  ],
  color: 'red',
  textColor: 'white'
}

let events3 = {
  events: [
    {
      title: 'pos es un ejemplo',
      start: '2020-08-04'
    }
  ],
  color: 'blue',
  textColor: 'white'
}


function openModal(e){
  console.log(e)
  console.log(e.date)
  console.log(e.dateStr)
  console.log('kiuboles!')
}

async function getEvents () {
  const config = {
    headers: {
      Accept: 'Application/json',
    },
  }
  
  try {
    const res = await fetch('http://localhost:5000/events/events', config)
    const data = await res.json()

    console.log(data)


  } catch (err) {
    console.log(err)
  }
}
getEvents()