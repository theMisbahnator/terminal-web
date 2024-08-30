import React, { useState, useRef, useEffect } from 'react';


const TerminalLine = ({hostName, addLine}) => {
    const textAreaRef = useRef(null);
    const [isEditable, setIsEditable] = useState(true);
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                setIsEditable(false);
                addLine();
            }
            if (textAreaRef.current) {
              textAreaRef.current.focus();
            }
        }
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
      }, [addLine]);

      
    
      const whiteStuff = (text) => {
          return <span className='white-terminal'>{text}</span>
      }
  
    return (
        <span className='line-container'>
            <span>{hostName}</span>{whiteStuff(":$ ~ ")} 
             <input
                ref={textAreaRef}
                type="text"
                className="single-line-input"
                readOnly={!isEditable}
            />
        </span>
    );
}

export default TerminalLine