import {useState, useEffect} from 'react'
import {
active, setActive, 
lastActive, setLastActive
} from '../App'
import {
javState, setJavState,
htmlState, setHTMLState,
tddState, setTDDState,
rubyState, setRubyState,
cssState, setCssState
} from '../Components/Board'

// useEffect(() => {
    
//     if(active){
//         console.log(active, 'active');
        
//         setJavState(true)
//         setHTMLState(true)
//         setTDDState(true)
//         setRubyState(true)
//         setCssState(true)

//         //nothing else changes and all cards are visible
//         if (active === lastActive){
//             setLastActive('')
//         }

//         else if(active === 'programming'){
//             console.log('css should be gone');
//             setCssState(false)
//         } 
        
//         else if (active === 'javascript'){
//             console.log('only js');
//             setHTMLState(false)
//             setTDDState(false)
//             setRubyState(false)
//             setCssState(false)
//         }
//         else if(active === 'intro'){
//             console.log('tdd should be gone');
//             setTDDState(false)
//         }
        
//         else if (active === 'web'){
//             console.log('ruby and tdd are gone');
//             setTDDState(false)
//             setRubyState(false)
//         }

//         else if (active === 'html'){
//             console.log('only html');
//             setJavState(false)
//             setTDDState(false)
//             setRubyState(false)
//             setCssState(false)
//         }

//         else if (active === 'tdd'){
//             console.log('only tdd');
//             setJavState(false)
//             setHTMLState(false)
//             setRubyState(false)
//             setCssState(false)
//         }

//         else if (active === 'ruby'){
//             console.log('only ruby');
//             setJavState(false)
//             setHTMLState(false)
//             setTDDState(false)
//             setCssState(false)
//         }

//         else if (active === 'design'){
//             console.log('only css');
//             setJavState(false)
//             setHTMLState(false)
//             setTDDState(false)
//             setRubyState(false)
//         }

//         else if (active === 'css'){
//             console.log('only css');
//             setJavState(false)
//             setHTMLState(false)
//             setTDDState(false)
//             setRubyState(false)
//         }
        
//         if(lastActive !== ''){
//             setLastActive(active)
//         }
//         console.log(lastActive, "last tag");
        
//         setActive('')
//         console.log(active, 'after');   
//     }
// }, [active]);

export default EventHandling