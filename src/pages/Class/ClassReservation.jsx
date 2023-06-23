import React from 'react'
import { useLocation } from 'react-router-dom'
import { Header, Main } from './ClassReservationStyle'

export default function ClassReservation() {
  const location = useLocation();
  const state = location.state
  console.log(state);
  return (
    <>
    <Header />
    <Main stae={state}/>
    </>
  )
}
