const { React } = goosemodScope.webpackModules.common,
    { findByDisplayName } = goosemodScope.webpackModules
const { useState, useRef, useEffect } = React


const File = React.memo(props => <div
    className="File">
    <div className="fileIcon" />
    <div className="fileText"
    >{props.name}</div>
    <div className="fileText"
    >{props.size}</div>
    <div className="fileText"
    >{props.type || "???/???"}</div>
    <div className="fileText wide"
    >{props.path}</div>
    <div className="fileText wide"
    >{props.url || "~"}</div>
</div>)


export default File