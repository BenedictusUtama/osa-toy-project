import React from 'react'

function TagButton (props) {    
    // console.log(props.tag);
    
    return (
        <div class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
            {props.tag}
        </div>
    )
}

export default TagButton