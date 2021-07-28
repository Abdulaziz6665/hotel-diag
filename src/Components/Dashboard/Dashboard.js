import Rechart from '../../Rechart'
import Rechart2 from '../../Rechart2'
import './dash.css'

function Dashboard () {

  const date = new Date()
  const [month, year] = [date.getMonth(), date.getFullYear()]
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]
  
  return (
    <>
      <h2>Приборная панель</h2>
      <div className='wrapper-diag'>
        <div className="diag">
          <div className='wrapper-days'>
            <p>Выручка от продаж номеров</p>
            <div className='wrapper-select'>
              <span>Показать: </span>
              <select className='select-days'>
                <option value="month">Ежемесячно</option>
                <option value="day">day</option>
                <option value="year">year</option>
              </select>
            </div>
          </div>
          <span className='month'>{monthNames[month]}<span>{year}</span></span>
          <div className='chart'>
            <Rechart />
          </div>
        </div>
        <div className="diag">
          <div className='wrapper-days'>
            <p>Загруженность</p>
            <div className='wrapper-select'>
              <span>Показать: </span>
              <select className='select-days'>
                <option value="month">Ежемесячно</option>
                <option value="day">day</option>
                <option value="year">year</option>
              </select>
            </div>
          </div>
          <span className='month'>{monthNames[month]}<span>{year}</span></span>
          <div className='chart'>
            <Rechart />
          </div>
        </div>
        <div className="diag">
          <div className='wrapper-days'>
            <p>Среднее количество гостей в день</p>
            <div className='wrapper-select'>
              <span>Показать: </span>
              <select className='select-days'>
                <option value="month">Ежемесячно</option>
                <option value="day">day</option>
                <option value="year">year</option>
              </select>
            </div>
          </div>
          <span className='month'>{monthNames[month]}<span>{year}</span></span>
          <div className='chart'>
            <Rechart />
          </div>
        </div>
        <div className="diag">
          <div className='wrapper-days'>
            <p>Соотношение инострацев и резидентов</p>
            <div className='wrapper-select'>
              <span>Показать: </span>
              <select className='select-days'>
                <option value="month">Ежемесячно</option>
                <option value="day">day</option>
                <option value="year">year</option>
              </select>
            </div>
          </div>
          <span className='month today'>Сегодня: <span>60% инос |</span><span>30% рез |</span><span>10% иус</span></span>
          <div className='chart'>
            <Rechart2 />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard