import { Route, Routes } from 'react-router-dom'
import Quote from './Quote'
import DailyFact from './DailyFact'
import BodyAndMind from './BodyAndMind'
import Playlist from './Playlist'
import GoalAndHabit from './GoalAndHabit'
import Notification from './Notification'
import Survey from './Survey'
import MeBusiness from './MeBusiness'
import ErrorStat from './ErrorStat'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Quote/>} />
        <Route path='/daily-facts' element={<DailyFact/>} />
        <Route path='/body-and-mind' element={<BodyAndMind/>} />
        <Route path='/playlist' element={<Playlist/>} />
        <Route path='/goals-and-habits' element={<GoalAndHabit/>} />
        <Route path='/notifications' element={<Notification/>} />
        <Route path='/surveys' element={<Survey/>} />
        <Route path='/me-business' element={<MeBusiness/>} />
        <Route path='/error-stats' element={<ErrorStat/>} />
      </Routes>
    </div>
  )
}

export default App