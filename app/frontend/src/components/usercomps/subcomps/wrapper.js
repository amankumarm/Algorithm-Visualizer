import React, { Component } from 'react'
import Usernavbar from './usernavbar'
import { useParams } from 'react-router-dom'

function Wrapper() {
    const id=window.location.href.split('http://localhost:8000/#/userview/')
    // var htmlContent=require(id)
        // htmlContent=htmlContent.slice(1)
        const loc=id.slice(1)
        console.log(loc)
    return (
        <div>
            <Usernavbar />

            <div w3-include-html={id}></div>
            {/* <h1>{loc}</h1>  */}
            <iframe src={id} />
     </div>
    );
}

export default Wrapper