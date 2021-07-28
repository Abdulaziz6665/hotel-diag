import signal from '../../img/signal.svg'
import menu from '../../img/menu.svg'
import trending from '../../img/trending-up.svg'
import trendingNoColor from '../../img/trending-up-no-color.svg'
import './Main-menu.css'
import { Link, useLocation } from 'react-router-dom'
import { useData } from '../../Context/Context'

function MainMenu () {

  const [className, setClassName] = useData()
  const { pathname } = useLocation()

  return (
    <>
      <div className='block'>
        <div className='main-menu'>
          <div className='client-side'>
            <button className='btn'><img src={menu} alt='menu' /></button>
            <h1>Hotelier</h1>
            <a href='/'><img src={signal} alt='signal' /></a>
          </div>
          <div className='admin'>
            <div className='img'>
              
            </div>
            <button className='btn-admin'>
              <div className='person'>
                <p>Анатолий Токов</p>
                <span>Администратор</span>
              </div>
              <p className='element'>{'>'}</p>
            </button>
          </div>
        </div>
        <ul className='service-list'>
          <Link className='jjj' to='/dashboard'>
            <li className={`service-list-item ${className.target === 'dash' ? className.cName : ''}`} onClick={() => setClassName({target: 'dash', cName: 'list-item-active', img: trending})}>
              <div className='wrapper-items'>
                <img src={className.target === 'dash'? className.img : trendingNoColor} alt="pic" />
                <div>Dashboard</div>
              </div>
            </li>
          </Link>
          <Link className='jjj' to='/boshqa'>
            <li className={`service-list-item ${className.target === 'sh' ? className.cName : ''}`} onClick={() => setClassName({target: 'sh', cName: 'list-item-active', img: trending})}>
                <div className='wrapper-items'>
                <img src={className.target === 'sh'? className.img : trendingNoColor} alt="pic" />
                  <div>Шахматка</div>
                </div>
            </li>
          </Link>
          <li className={`service-list-item ${className.target === 's' ? className.cName : ''}`} onClick={() => setClassName({target: 's', cName: 'list-item-active', img: trending})}>
            <div className='wrapper-items'>
            <img src={className.target === 's'? className.img : trendingNoColor} alt="pic" />
              <div>Служба приёма</div>
            </div>
          </li>
          <li className={`service-list-item ${className.target === 'p' ? className.cName : ''}`} onClick={() => setClassName({target: 'p', cName: 'list-item-active', img: trending})}>
            <div className='wrapper-items'>
            <img src={className.target === 'p'? className.img : trendingNoColor} alt="pic" />
              <div>Профили гостей</div>
            </div>
          </li>
          <li className={`service-list-item ${className.target === 'r' ? className.cName : ''}`} onClick={() => setClassName({target: 'r', cName: 'list-item-active', img: trending})}>
            <div className='wrapper-items'>
            <img src={className.target === 'r'? className.img : trendingNoColor} alt="pic" />
              <div>Roomboard</div>
            </div>
          </li>
          <li className={`service-list-item ${className.target === 'b' ? className.cName : ''}`} onClick={() => setClassName({target: 'b', cName: 'list-item-active', img: trending})}>
            <div className='wrapper-items'>
            <img src={className.target === 'b'? className.img : trendingNoColor} alt="pic" />
              <div>Ресторан и Бар</div>
            </div>
          </li>
          <li className={`service-list-item ${className.target === 'f' ? className.cName : ''}`} onClick={() => setClassName({target: 'f', cName: 'list-item-active', img: trending})}>
            <div className='wrapper-items'>
            <img src={className.target === 'f'? className.img : trendingNoColor} alt="pic" />
              <div>Финансы</div>
            </div>
          </li>
          <li className={`service-list-item ${className.target === 'st' ? className.cName : ''}`} onClick={() => setClassName({target: 'st', cName: 'list-item-active', img: trending})}>
            <div className='wrapper-items'>
            <img src={className.target === 'st'? className.img : trendingNoColor} alt="pic" />
              <div>Статистика и Отчёты</div>
            </div>
          </li>
          <li className={`service-list-item ${className.target === 'ch' ? className.cName : ''}`} onClick={() => setClassName({target: 'ch', cName: 'list-item-active', img: trending})}>
            <div className='wrapper-items'>
            <img src={className.target === 'ch'? className.img : trendingNoColor} alt="pic" />
              <div>Чат</div>
            </div>
          </li>
          <li className={`service-list-item ${className.target === 'n' ? className.cName : ''}`} onClick={() => setClassName({target: 'n', cName: 'list-item-active', img: trending})}>
            <div className='wrapper-items'>
            <img src={className.target === 'n'? className.img : trendingNoColor} alt="pic" />
              <div>Настройка</div>
            </div>
          </li>
        </ul>

        {pathname === '/' && <div className='home_empty'><h1>Enter Dashboard</h1></div>} 
      </div>
    </>
  )
}

export default MainMenu