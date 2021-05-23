const { React } = goosemodScope.webpackModules.common,
    { findByDisplayName, findByProps } = goosemodScope.webpackModules
const { useState, useMemo } = React
import DropZone from "./dropZone"
import File from "./file"

// const Text = findByDisplayName("Text"),
//     Markdown = findByDisplayName("Markdown"),
//     ButtonColors = findByProps("button", "colorRed"),
//     ConfirmModal = findByDisplayName("ConfirmModal"),
//     Button = findByDisplayName("Button")

const FileUpload = props => {
    const [files, setFiles] = useState([])
    let filesTemp = files
    const uploadFile = file => {
        if (files.includes(file)) {
            goosemodScope.createToast(
                "can't upload same file twice",
                { type: "warning" }
            )
            return
        }
        //gross but needed bc of race
        filesTemp = [...filesTemp, file]
        setFiles(filesTemp)
    }


    const filesList = useMemo(() => files.map(file => <File
        name={file.name}
        path={file.path}
        size={file.size}
        type={file.type}
    />),
        [files]
    )

    return <div className="FileUpload" >
        <input
            className="fileUploadInput"
            type="file" name="fileUploadInput"
            id="fileUploadInput"
            multiple="true"
            onChange={e => {
                let fileArray = [...e.target.files]
                if (fileArray && fileArray.length > 0) fileArray.forEach(
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
            {filesList}
        </DropZone>
    </div>
}

export default FileUpload