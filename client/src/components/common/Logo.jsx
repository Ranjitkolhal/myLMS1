import React from 'react'
import { Link } from 'react-router-dom'

function Logo({ size = 1, tutor = false , outline = false , to = '/' }) {
    return (
        <>
            {/* <div className='border-r border-l ring-1 border-blue-500 rounded-full px-1 flex flex-col hover:bg-blue-50' > */}
            {/* <Link to={to} className='relative'> */}
            <Link to="/" className=''>
                <h1 className=
                {
                    `${tutor ? 'text-orange-400': 'text-blue-600' }
                    ${ outline ? 'ring-1 rounded-full' : ''  } 
                    px-2 text-center nexa-font hover:bg-transparent bg-black py-2 rounded-lg`
                } 
                
                style={{ fontSize: `${size}rem` }}><img style={{width : "75px"}} src='https://raw.githubusercontent.com/iskconpandharpur/LSM/main/2-PhotoRoom-2.png'></img></h1>
            </Link>
            {/* <span className='nexa-font  text-md text-blue-600 text-center' style={{ marginTop: -11, fontSize:size-8 }}>Solutions</span> */}
            {/* </div> */}
        </>
    )
}

export default Logo 