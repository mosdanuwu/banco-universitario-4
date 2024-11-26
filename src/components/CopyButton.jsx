import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';


const CopyButton = ({  className ,textToCopy}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 500);
      })
      .catch(err => {
        console.error('Error al copiar: ', err);
      });
  };

  return (
    <button  className={className} onClick={handleCopy}>
        
        {isCopied ? <FontAwesomeIcon icon={faCheck} size="lg" className="copy-icon"/> : 
        <FontAwesomeIcon icon={faCopy} size="lg" className="copy-icon"/>}
    </button>
  );
};

export default CopyButton;
