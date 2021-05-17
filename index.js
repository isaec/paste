import { channelTextAreaButtons } from "@goosemod/patcher"

let style

const { React } = goosemodScope.webpackModules.common,
    { findByDisplayName, findByProps } = goosemodScope.webpackModules
const e = React.createElement

const Text = findByDisplayName("Text"),
    Markdown = findByDisplayName("Markdown"),
    ButtonColors = findByProps("button", "colorRed");

const uploadWindow = srcProps => {
    (0, findByProps("openModal").openModal)((model) => {
        //if (modal.transitionState === 3) res(false); // If clicked off

        let description = "this is to prevent crash"

        return e(findByDisplayName("ConfirmModal"),
            {
                header: "upload",
                confirmText: "Upload and send link",
                cancelText: findByProps("Messages").Messages.CANCEL,
                confirmButtonColor: ButtonColors[`colorRed`],
                onClose: () => { // General close (?)
                    console.log("closed")
                },
                onCancel: () => { // Cancel text
                    console.log("canceled")
                    model.onClose();
                },
                onConfirm: () => { // Confirm button
                    console.log("do it")
                    model.onClose();
                },
                transitionState: model.transitionState,
            },
            ...description.split('\n').map((x) => e(Markdown,
                {
                    size: Text.Sizes.SIZE_16
                },
                x))
        );
    });
}

export default {
    goosemodHandlers: {
        onImport: () => {
            style = document.createElement("style")
            document.head.appendChild(style)
            //https://github.com/GooseMod/MS2Porter/blob/main/modules/deNitro/index.js
            style.appendChild(document.createTextNode(".buttons-3JBrkn > button { display: none; }"))
        },
        onLoadingFinished: () => {
            channelTextAreaButtons.patch("upload", "https://avatars.githubusercontent.com/u/19228318?s=48&v=4", uploadWindow)
        },
        onRemove: () => {
            style.remove()
        },
        //this part makes persistent settings work
        // getSettings: () => [settings],
        // loadSettings: ([_settings]) => {
        //     if (_settings.compat !== version) return
        //     settings = _settings
        // }
    }
}