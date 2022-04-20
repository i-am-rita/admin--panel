import React from 'react'
import './MainCont.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'

const MainCont = () => {
  return (
    <div className='main-container'>
    <h1>Dashboard</h1>
    <Cards/>
    <Table/>
    </div>
  )
}

export default MainCont