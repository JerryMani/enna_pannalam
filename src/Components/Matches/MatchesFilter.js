import React from 'react'
import {TiMinus} from "react-icons/ti"
import {MdOutlineAdd} from "react-icons/md"

const MatchesFilter = () => {
  return (
    <div className='match-filter-container'>
        <div className='match-filter-sort-cont'>
            <div className='match-filter-sortby'>
                <p>Sort by</p>
                <p><TiMinus size={25}/></p>
            </div>
            <div className='match-filter-sortby-list'>
                <div className='match-filter-sortby-item'>
                    <input type='radio'/>
                    <label>Relevance</label>
                </div>
                <div className='match-filter-sortby-item'>
                    <input type='radio'/>
                    <label>Last Login</label>
                </div>
                <div className='match-filter-sortby-item'>
                    <input type='radio'/>
                    <label>Date Created</label>
                </div>
                <div className='match-filter-sortby-item'>
                    <input type='radio'/>
                    <label>Premium Members</label>
                </div>
            </div>
        </div>

        <div className='match-filterby-cont'>
            <p className='match-filterby-head'>Filter by</p>
            <div className='match-filterby-list'>
                <div className='match-filterby-item'>
                    <p>Profile Type</p>
                    <p><MdOutlineAdd size={25}/></p>
                </div>
                <div className='match-filterby-item'>
                    <p>Profile Type</p>
                    <p><MdOutlineAdd size={25}/></p>
                </div>
                <div className='match-filterby-item'>
                    <p>Profile Type</p>
                    <p><MdOutlineAdd size={25}/></p>
                </div>
                <div className='match-filterby-item'>
                    <p>Profile Type</p>
                    <p><MdOutlineAdd size={25}/></p>
                </div>
                <div className='match-filterby-item'>
                    <p>Profile Type</p>
                    <p><MdOutlineAdd size={25}/></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MatchesFilter