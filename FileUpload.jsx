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
        >drag and drop, or click to upload files</label>
    </div>
}

export default FileUpload