import { useState } from "react";
import React from "react";
import AccordionItem from "./AccordionItem";
import './AccordionCard.css';
import Image from "./image";


const items = [
  {
    itemNumber:1,
    title:'How many team members can I invite?',
    content:'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
  } ,
   {
    itemNumber:2,
    title:'What is the maximum file upload size?',
    content:'No more than 2GB. All files in your account must fit your allotted storage space.'
  },
    {
    itemNumber:3,
    title:'How do I reset my password?',
    content:'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you. '
  },

    {
    itemNumber:4,
    title:'Can I cancel my subscription?',
    content:'Yes! Send us a message and we’ll process your request no questions asked. Do you provide additional support? Chat and email support is available 24/7. Phone lines are open during normal business hours.'
  }
]


function AccordionCard() {
  const [activeAccordionNumber,setactiveAccordionNumber] = useState(null);

  const handleClick =(accordionNumber)=>{
     if (activeAccordionNumber === accordionNumber) {
      setactiveAccordionNumber(null)
    } else{
      setactiveAccordionNumber(accordionNumber)}
  }

  

    return (

      <div className="AccordionContainer">
            <Image />

        <div className='AccordionContent'> 
        <h1> F A Q </h1>

        {items.map((item)=>{
          return <AccordionItem 
          handleClick={handleClick}
          activeAccordionNumber={activeAccordionNumber}
          itemNumber={item.itemNumber}
          title={item.title}
          content={item.content}
          />
        })}
     </div>
  
      </div>
    );
  }
  
  export default AccordionCard;
  