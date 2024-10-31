import React from 'react'
import "./Cintent.css"
import ContentTop from '../../components/ContentTop/ContentTop'
import ContantMain from "../../components/ContentMain/ContentMain"
export default function Content() {
  return (
    <div className='main-content'>
      <ContentTop/>
      <ContantMain/>
    </div>
  )
}
