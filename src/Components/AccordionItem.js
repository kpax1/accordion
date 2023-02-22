import React from 'react'
import ArrowDown from './images/icon-arrow-down.svg'
import styles from './AccordionItem.css'
export default function AccordionItem(props) {
    const {activeAccordionNumber, handleClick, itemNumber, title, content} =props
  return (
    
    <div  onClick={()=>handleClick(itemNumber)}
    className='AccordionItem'>

      <div className='question-img'>
      <div className='title'>
      {activeAccordionNumber===itemNumber ? <p style={{ fontWeight: '700' }}>{title} </p> : <p> {title}</p>}
      </div>
     <div className={activeAccordionNumber !==itemNumber ? 'Arrow' : 'Arrow up'}>
      <img src={ArrowDown}/>
     </div>
     </div>
     <div className='itemcontent'> 
     {activeAccordionNumber === itemNumber ?  <p> {content} </p> : null}

     </div>
     
    </div>  )
}
