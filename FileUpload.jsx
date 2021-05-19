const { React } = goosemodScope.webpackModules.common,
    { findByDisplayName, findByProps } = goosemodScope.webpackModules
const { useState, useRef } = React

const Text = findByDisplayName("Text"),
    Markdown = findByDisplayName("Markdown"),
    ButtonColors = findByProps("button", "colorRed"),
    ConfirmModal = findByDisplayName("ConfirmModal"),
    Button = findByDisplayName("Button")

const FileUpload = ({
    label,
    updateFilesCb,
    ...otherProps
}) => {
    const fileInputField = useRef(null)
    const [files, setFiles] = useState({})

    return <section>
        <label>{label}</label>
        <Markdown>Drag and drop or</Markdown>
        <button type="button">
            <i className="fas fa-file-upload" />
            <span>Upload files</span>
        </button>
        <input
            type="file"
            ref={fileInputField}
            title=""
            value=""
            multiple={true}
            {...otherProps}
        />
    </section>
}

export default FileUpload