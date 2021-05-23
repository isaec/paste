const { React } = goosemodScope.webpackModules.common
const { useState, useRef, useEffect } = React

const File = props => <div
    className="File">
    <div
        className="fileText"
    >{props.name}</div>
    <div
        className="fileText"
    >{props.url || "~"}</div>
    <div
        className="fileText"
    >{props.location}</div>
    <div
        className="fileText"
    >{props.size}</div>
</div>


export default File