import React from 'react'


const Links = (props) =>{
    return(
        <ul className="link-names">
            <a href={props.aboutLink}><li>About</li></a>
            <a href={props.aboutLink}><li>Careers</li></a>
            <a href={props.aboutLink}><li>Pricing</li></a>
            <a href={props.aboutLink}><li>Feedback</li></a>
            <a href={props.aboutLink}><li>Roadmap</li></a>
        </ul>
    )
}

export default Links