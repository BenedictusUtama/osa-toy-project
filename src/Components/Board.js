
import React, {useState, useEffect}from 'react'
import Card from './Card'
import courses from '../mock/courses';
import axios from 'axios';

function Board (props) {
    let active = props.active
    let setActive = props.setActive
    let lastActive = props.lastActive
    let setLastActive = props.setLastActive

    // let [javs, htm, testd, rub, css] = cards
    const [javState, setJavState] = useState(true)
    const [htmlState, setHTMLState] = useState(true)
    const [tddState, setTDDState] = useState(true)
    const [rubyState, setRubyState] = useState(true)
    const [cssState, setCssState] = useState(true)

    const[authors, setAuthors] = useState({});

    const url = "https://s3.us-east-2.amazonaws.com/codecademy-interview/entities.json"
    
    useEffect(() => {
        setAuthors({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setAuthors({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setAuthors({
                    loading: false,
                    data: null,
                    error: true,

                })
            })
    }, [url]);
    
    let cards = []
    let orig = []
    let i 
    if (authors.data != null && props.classes){
        for (i = 0; i < courses.length; i++){
            // console.log(props.classes);
            
            cards.push(<Card course = {Object.values(props.classes[i])} datas = {authors.data.authors} />)
        }
    }
    
    // orig = cards

    // console.log(cards, "AAAA");

    useEffect(() => {
    
        if(active){
            console.log(active, 'active');
            
            setJavState(true)
            setHTMLState(true)
            setTDDState(true)
            setRubyState(true)
            setCssState(true)
    
            //nothing else changes and all cards are visible
            if (active === lastActive){
                setLastActive(null)
            }
    
            else if(active === 'programming'){
                console.log('css should be gone');
                setCssState(false)
            } 
            
            else if (active === 'javascript'){
                console.log('only js');
                setHTMLState(false)
                setTDDState(false)
                setRubyState(false)
                setCssState(false)
            }
            else if(active === 'intro'){
                console.log('tdd should be gone');
                setTDDState(false)
            }
            
            else if (active === 'web'){
                console.log('ruby and tdd are gone');
                setTDDState(false)
                setRubyState(false)
            }
     
            else if (active === 'html'){
                console.log('only html');
                setJavState(false)
                setTDDState(false)
                setRubyState(false)
                setCssState(false)
            }
    
            else if (active === 'tdd'){
                console.log('only tdd');
                setJavState(false)
                setHTMLState(false)
                setRubyState(false)
                setCssState(false)
            }
    
            else if (active === 'ruby'){
                console.log('only ruby');
                setJavState(false)
                setHTMLState(false)
                setTDDState(false)
                setCssState(false)
            }
    
            else if (active === 'design'){
                console.log('only css');
                setJavState(false)
                setHTMLState(false)
                setTDDState(false)
                setRubyState(false)
            }
    
            else if (active === 'css'){
                console.log('only css');
                setJavState(false)
                setHTMLState(false)
                setTDDState(false)
                setRubyState(false)
            }
            
            if(!lastActive){
                setLastActive(active)
            }
            console.log(lastActive, "last tag");
            
            setActive('')
            console.log(active, 'after');   
        }
    }, [active]);
    
    
    return (
        <ul>
            <h1 class = "shadow mt-8">
            </h1>
            <div class = "grid grid-cols-3 ml-6 mr-4">                
                {/* js */}
                {javState && cards[0]}
                {/* html  */}
                {htmlState && cards[1]}
                {/* tdd */}
                {tddState && cards[2]}
                {/* ruby */}
                {rubyState && cards[3]}
                {/* css */}
                {cssState && cards[4]}
            </div>
            
        </ul>
    )
}


export default Board


