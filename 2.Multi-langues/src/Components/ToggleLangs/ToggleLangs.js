import React, {useContext, useState} from 'react'
import FrenchFlag from '../../assets/france.svg'
import EnglishFlag from '../../assets/united-kingdom.svg'
import SpanishFlag from '../../assets/spain.svg'
import './ToggleLangs.css'
import { Context } from '../context/langContext'

export default function ToggleLangs() {

    const {toggleLang} = useContext(Context)

  return (
    <div className='container-langs'>
      <img src={FrenchFlag} onClick={() => toggleLang('FR')} ></img>
      <img src={EnglishFlag} onClick={() => toggleLang('EN')}></img>
      <img src={SpanishFlag} onClick={() => toggleLang('ES')}></img>
    </div>
  )
}
