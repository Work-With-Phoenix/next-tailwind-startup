import * as React from 'react'



export default function Layout({children}){
    return(
        <>
        
         {/* main section which holds {child} content */}
         <main>{children}</main>

        </>
    )
}