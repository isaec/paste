const { React } = goosemodScope.webpackModules.common,
    { findByDisplayName, findByProps } = goosemodScope.webpackModules
const { useState, useRef } = React
import DropZone from "./dropZone"

// const Text = findByDisplayName("Text"),
//     Markdown = findByDisplayName("Markdown"),
//     ButtonColors = findByProps("button", "colorRed"),
//     ConfirmModal = findByDisplayName("ConfirmModal"),
//     Button = findByDisplayName("Button")

const FileUpload = props => {
    // const [files, setFiles] = useState({})

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
        <DropZone />
    </div>
}

export default FileUpload