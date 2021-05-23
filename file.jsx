const { React } = goosemodScope.webpackModules.common
const { useState, useRef, useEffect } = React

const File = React.memo(props => <div
    className="File">
    <div
        className="fileText"
    >{props.name}</div>
    <div
        className="fileText"
    >{props.url || "~"}</div>
    <div
        className="fileText"
    >{props.path}</div>
    <div
        className="fileText"
    >{props.size}</div>
</div>)


export default File