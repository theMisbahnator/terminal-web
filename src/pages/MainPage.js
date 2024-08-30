import React, {useState} from 'react'
import IntroText from '../components/IntroText';
import TerminalLine from '../components/TerminalLine';
import data from '../constants.json';

const getHostName = (names) => {
    return names[Math.floor(Math.random() * names.length)];
  };

const hostName = getHostName(data.hostnames);

const MainPage = () => {
  const [lines, setLines] = useState(["1"]);

  const addLines = () => {
    setLines([...lines, `Item ${lines.length + 1}`]);
    console.log(lines)
  };

  return (
    <section >
        <div className='terminal'>
            <IntroText/>
            <div className='terminal-text'>
                {
                    lines.map(line => (
                        <TerminalLine key={line} hostName = {hostName} addLine={addLines}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default MainPage