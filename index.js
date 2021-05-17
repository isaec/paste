import { channelTextAreaButtons } from "@goosemod/patcher"

let style

const uploadWindow = srcProps => {
    console.log(srcProps)

    const { React } = goosemodScope.webpackModules.common,
        { findByDisplayName, findByProps } = goosemodScope.webpackModules

    const Text = findByDisplayName("Text"),
        Markdown = findByDisplayName("Markdown"),
        ButtonColors = findByProps("button", "colorRed");

    (0, findByProps("openModal").openModal)((e) => {
        //if (e.transitionState === 3) res(false); // If clicked off

        let description = "this is to prevent crash"

        return React.createElement(findByDisplayName("ConfirmModal"),
            {
                header: "upload",
                confirmText: "upload and send link",
                cancelText: findByProps("Messages").Messages.CANCEL,
                confirmButtonColor: ButtonColors[`colorRed`],
                onClose: () => { // General close (?)
                    console.log("closed")
                },
                onCancel: () => { // Cancel text
                    console.log("canceled")
                    e.onClose();
                },
                onConfirm: () => { // Confirm button
                    console.log("do it")
                    e.onClose();
                },
                transitionState: e.transitionState,
            },
            ...description.split('\n').map((x) => React.createElement(Markdown,
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