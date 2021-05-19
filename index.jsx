import { channelTextAreaButtons } from "@goosemod/patcher"
import FileUpload from "./FileUpload"

let textUnpatch, removecss, removeN

const { React } = goosemodScope.webpackModules.common,
    { findByDisplayName, findByProps } = goosemodScope.webpackModules

const ButtonColors = findByProps("button", "colorRed"),
    ConfirmModal = findByDisplayName("ConfirmModal")

import { readFileSync } from "fs"

const addStyle = str => {
    let style = document.createElement("style")
    document.head.appendChild(style)
    style.appendChild(
        document.createTextNode(str))
    return () => style.remove()
}
const addCss = name => {
    let css = readFileSync(`${__dirname}/style.css`, "utf8")
    return addStyle(css)
}

const makeUploadWindow = srcProps => {
    (0, findByProps("openModal").openModal)((model) => {
        return <ConfirmModal
            //specific to try to prevent collision
            className="uploadModalBigGoose"
            header="upload"
            confirmText="Upload and Send Link"
            confirmButtonColor={ButtonColors["colorRed"]}
            cancelText={findByProps("Messages").Messages.CANCEL}
            onClose={() => { // General close (?)
                console.log("closed")
            }}
            onCancel={() => { // Cancel text
                console.log("canceled")
                model.onClose();
            }}
            onConfirm={() => { // Confirm button
                console.log("do it")
                model.onClose();
            }}
            transitionState={model.transitionState}
        >
            <FileUpload
            />
        </ConfirmModal>
    });
}

export default {
    goosemodHandlers: {
        onImport: () => {
            textUnpatch = channelTextAreaButtons.patch(
                "upload",
                "https://avatars.githubusercontent.com/u/19228318?s=48&v=4",
                makeUploadWindow
            )
            removecss = addCss("style.css")
            //https://github.com/GooseMod/MS2Porter/blob/main/modules/deNitro/index.js
            removeN = addStyle(".buttons-3JBrkn > button { display: none; }")
        },
        onLoadingFinished: () => {
            //
        },
        onRemove: () => {
            removeN()
            removecss()
            textUnpatch()
        },
        //this part makes persistent settings work
        // getSettings: () => [settings],
        // loadSettings: ([_settings]) => {
        //     if (_settings.compat !== version) return
        //     settings = _settings
        // }
    }
}