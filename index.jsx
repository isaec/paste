import { channelTextAreaButtons } from "@goosemod/patcher"

let style, textPatch

const { React } = goosemodScope.webpackModules.common,
    { findByDisplayName, findByProps } = goosemodScope.webpackModules
const e = React.createElement

const Text = findByDisplayName("Text"),
    Markdown = findByDisplayName("Markdown"),
    ButtonColors = findByProps("button", "colorRed"),
    ConfirmModal = findByDisplayName("ConfirmModal")

const makeUploadWindow = srcProps => {
    (0, findByProps("openModal").openModal)((model) => {

        return <ConfirmModal
            header="upload"
            confirmText="Upload and Send Link"
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
            <Markdown>test</Markdown>
        </ConfirmModal>
    });
}

export default {
    goosemodHandlers: {
        onImport: () => {
            style = document.createElement("style")
            document.head.appendChild(style)

            style.appendChild( //https://github.com/GooseMod/MS2Porter/blob/main/modules/deNitro/index.js
                document.createTextNode(
                    ".buttons-3JBrkn > button { display: none; }"
                )
            )

            textPatch = channelTextAreaButtons.patch(
                "upload",
                "https://avatars.githubusercontent.com/u/19228318?s=48&v=4",
                makeUploadWindow
            )
        },
        onLoadingFinished: () => {
            //
        },
        onRemove: () => {
            style.remove()
            textPatch.remove()
        },
        //this part makes persistent settings work
        // getSettings: () => [settings],
        // loadSettings: ([_settings]) => {
        //     if (_settings.compat !== version) return
        //     settings = _settings
        // }
    }
}