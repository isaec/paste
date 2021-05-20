const { React } = goosemodScope.webpackModules.common,
    { findByDisplayName, findByProps } = goosemodScope.webpackModules
const { useState, useRef } = React

// const Text = findByDisplayName("Text"),
//     Markdown = findByDisplayName("Markdown"),
//     ButtonColors = findByProps("button", "colorRed"),
//     ConfirmModal = findByDisplayName("ConfirmModal"),
//     Button = findByDisplayName("Button")

const FileUpload = ({
    updateFilesCb,
    ...otherProps
}) => {
    const fileInputField = useRef(null)
    const [files, setFiles] = useState({})

    const prevent = e => {
        console.warn("drag")
        e.preventDefault()
        e.stopPropagation()
    }

    return <div
        className="FileUpload"
    >
        <input
            className="fileUploadInput"
            type="file" name="fileUploadInput"
            id="fileUploadInput"
            ref={fileInputField}
            multiple="true"
            {...otherProps}
        />
        <label
            className="fileUploadLabel"
            for="fileUploadInput"

            onDrag={prevent}
            onDragStart={prevent}
            onDragEnd={prevent}
            onDragOver={prevent}
            onDragEnter={prevent}
            onDragLeave={prevent}
            onDrop={prevent}
        >drag and drop, or click to upload files</label>
    </div>
}

export default FileUpload