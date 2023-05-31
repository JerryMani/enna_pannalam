import React from 'react'
// import MatchesFilter from './MatchesFilter'

import "./matches.css";
import MatchesProf from './MatchesProf';

const Matches = () => {
  return (
    <div className='matches-cont'>
      {/* <MatchesFilter/> */}
      <div className='matches-prof-cont'>
        <MatchesProf/>
      </div>
    </div>
  )
}

export default Matches