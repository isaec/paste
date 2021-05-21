const { React } = goosemodScope.webpackModules.common,
    { findByDisplayName, findByProps } = goosemodScope.webpackModules
const { useState, useRef } = React

// const Text = findByDisplayName("Text"),
//     Markdown = findByDisplayName("Markdown"),
//     ButtonColors = findByProps("button", "colorRed"),
//     ConfirmModal = findByDisplayName("ConfirmModal"),
//     Button = findByDisplayName("Button")

const FileUpload = props => {
    const [files, setFiles] = useState({})
    const [dragging, setDragging] = useState(false)

    const prev = e => {
        e.stopPropagation()
        e.preventDefault()
    }

    const drOn = e => {
        prev(e)
        setDragging(true)
    }
    const drOff = e => {
        prev(e)
        setDragging(false)
    }

    return <div className="FileUpload" >
        <input
            className="fileUploadInput"
            type="file" name="fileUploadInput"
            id="fileUploadInput"
            multiple="true"
        />
        <label
            className="fileUploadLabel"
            for="fileUploadInput"
        >click to upload files</label>
        <div className={dragging ? "fileDragZone dragging" : "fileDragZone"}
            onDragEnter={drOn}
            onDragOver={drOn}
            onDragLeave={drOff}
            onDrop={e => {
                drOff(e)
                let dt = e.dataTransfer
                let file = dt.files
                alert(file)
            }}
        >
        </div>
    </div>
}

export default FileUpload