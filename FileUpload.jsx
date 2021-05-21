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
    const [dragging, setDragging] = useState(0)

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

            dragging={dragging}

            onDragEnter={() => setDragging(1)}
            onDragLeave={() => setDragging(0)}
            onDrop={() => {
                console.warn("dropped")
                setDragging(0)
            }}
        >drag and drop, or click to upload files</label>
    </div>
}

export default FileUpload