import React, {useState} from 'react'
import courses from '../mock/courses'
import TagButton from './TagButton';
import CardEvents from './Board'

// not finished, doesnt get all tags




function Tags (props) {
    
    let active = props.active
    let setActive = props.setActive

    let i;
    let j;
    let t;
    let newTag;
    let allTags = [];
    let found = false;
    let buttons = [];
    
    

    for (i = 0; i < courses.length; i++) {
        let [id, slug, title, image, description, author_id, tags, pro] = Object.values(courses[i]);    

        for (j = 0; j < tags.length; j++) {
            found = false
            newTag = Object.values(tags)[j];
            // console.log(newTag);
            
            
            for (t = 0; t < allTags.length; t++){
                if (allTags[t] === newTag) {
                    found = true;
                }  
            }
            
            if(found){
                // doesn't go to else and tag isnt added
            }
            else{
                allTags.push(newTag)
            }
            

        }    
    }

    // console.log(allTags, "tags recorded");
    let name = ''

    for (i = 0; i < allTags.length; i++){
        name = Object.values(allTags)[i]
        buttons.push(
            <button onClick = {() => setActive(name)}>
                <TagButton tag = {name} />
            </button> 
        )
    }
    
    // console.log(buttons);

    return(    
        <div class = "ml-2" href="#">
            Tag Area
            <all class = "flex space-x-4 mt-2" >
                {buttons}
            </all>
            
        </div>
    )
}

export default Tags