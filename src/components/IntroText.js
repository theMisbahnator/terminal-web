import React from 'react'
import data from '../constants.json';

const IntroText = () => {
    const printIntro = (lines) => {
        return lines.map((item, index) => (
            <div key={index} className='intro-text'>
                {item}
            </div>));
    }

    const printNavs = (lines) => {
        return lines.map((item, index) => (
            <React.Fragment key={index}>
            <div className="help-item under-hover">/{item}</div>
            {/* {index < lines.length - 1 && <span className='help-item'> | </span>} */}
            </React.Fragment>
        ));
    };
      

  return (
    <div>
        <div>
            {printIntro(data['intro-desc'])}
        </div>
        <span className='help-nav'>
            {printNavs(data['sections'])}
        </span>
    </div>
  )
}

export default IntroText