import React from 'react'



function Card(props) {

    // console.log(props, 'PROPS');

    // console.log(Object.values(props.course)[2], 'title');
    

    const [id, slug, title, image, description, author_id, tags, pro] = Object.values(props.course);
    
    let content = null
    let author_name = ""

    let i
    let hashtags = []
    for (i = 0; i < tags.length; i++){
        hashtags.push(
            <span class = "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"> 
                {tags[i]} 
            </span>
        )
    }

    
    // console.log(props.datas[author_id].name, "ID");
    author_name = props.datas[author_id].name
    

    if(props.course) {
        content = 
        <div class = "rounded overflow-hidden shadow-md w-3/4 mb-6">
            <div class = "ml-4 font-bold text-xl"> {title} </div>
            <div class = "ml-8">
                {author_name}
            </div>
            <img class = "object-contain h-48 w-full" src = {image} alt = {title}/>
            <div class = "px-6 py-4">                
                <p class = "text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div class = "px-6 py-4">
                {hashtags}
            </div>
        </div>        
    }

    return(
        <div>
            {content}
        </div>
    )
    

}

export default Card




