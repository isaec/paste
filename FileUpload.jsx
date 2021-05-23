const { React } = goosemodScope.webpackModules.common,
    { findByDisplayName, findByProps } = goosemodScope.webpackModules
const { useState, useRef } = React
import DropZone from "./dropZone"
import File from "./file"

// const Text = findByDisplayName("Text"),
//     Markdown = findByDisplayName("Markdown"),
//     ButtonColors = findByProps("button", "colorRed"),
//     ConfirmModal = findByDisplayName("ConfirmModal"),
//     Button = findByDisplayName("Button")

const FileUpload = props => {
    const [files, setFiles] = useState()
    const uploadFile = file => {
        console.log(file)
    }

    return <div className="FileUpload" >
        <input
            className="fileUploadInput"
            type="file" name="fileUploadInput"
            id="fileUploadInput"
            multiple="true"
            onChange={e => {
                let files = [...e.target.files]
                if (files && files.length > 0) files.forEach(
                    file => uploadFile(file)
                )
            }}
        />
        <label
            className="fileUploadLabel"
            for="fileUploadInput"
        >click to upload files</label>
        <DropZone
            upload={uploadFile}
        >
            <File />
        </DropZone>
    </div>
}

export default FileUpload