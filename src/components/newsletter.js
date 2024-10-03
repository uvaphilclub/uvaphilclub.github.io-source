import * as React from "react"

const Newsletter = ({newsletter, index}) =>{
  return(
    <div>
    {index % 2 === 0 && (
      <a href={newsletter.newsletter.url}>
      <div className="flex justify-center border-2 bg-blue rounded-sm ml-6 mr-3 sm:ml-20 sm:mr-32 pl-2">
        <p className="text-xl bg-yellow border-2 inline-block px-1 my-1">{newsletter.title}</p>
        <div className="w-6 ml-64 bg-yellow hidden sm:block"></div>
      </div>
    </a>)}
    {index % 2 === 1 && (
       <a href={newsletter.newsletter.url}>
       <div className="flex justify-center border-2 bg-red rounded-sm ml-3 mr-6 sm:ml-32 sm:mr-20 pl-2">
         <p className="text-xl bg-yellow border-2 inline-block px-1 my-1">{newsletter.title}</p>
         <div className="w-6 ml-64 bg-yellow hidden sm:block"></div>
       </div>
       </a>
    )}
    </div>
  )
}

export default Newsletter;