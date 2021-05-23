const { React } = goosemodScope.webpackModules.common,
    { findByDisplayName } = goosemodScope.webpackModules
const { useState, useRef, useEffect } = React


const File = React.memo(props => <div
    className="File">
    <img src="https://discord.com/assets/66084381f55f4238d69e5cbe3b8dc42e.svg" alt="file icon" className="fileIcon" />
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