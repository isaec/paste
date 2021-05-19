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

    return <section>
        <input
            type="file" name="file"
            ref={fileInputField}
            multiple="true"
            {...otherProps}
        />
        <label
            for="file"
        >drag and drop, or click to upload files</label>
    </section>
}

export default FileUpload