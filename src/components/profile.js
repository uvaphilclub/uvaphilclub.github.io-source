import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage,getImage } from 'gatsby-plugin-image';

const Profile = ({image,name,title,email}) => 
    {
    console.log(image)
    const pfp = getImage(image)
    console.log(pfp)
    return(
    <div className="w-56">
        <img className="size-56" src={image} alt={"Picture of " + {name}}></img>
        <h1>{title}</h1>
        <div className="text-center">
            <p>{name}</p>
            <a href={"mailto: " + email} >{email} &#9993;</a>
        </div>
    </div>
    );
    }
export default Profile