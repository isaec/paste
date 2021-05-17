import { channelTextAreaButtons } from "@goosemod/patcher"

let style

export default {
    goosemodHandlers: {
        onImport: () => {
            style = document.createElement("style")
            document.head.appendChild(style)
            //https://github.com/GooseMod/MS2Porter/blob/main/modules/deNitro/index.js
            style.appendChild(document.createTextNode(".buttons-3JBrkn > button { display: none; }"))
        },
        onLoadingFinished: () => {
            channelTextAreaButtons.patch("upload", "https://avatars.githubusercontent.com/u/19228318?s=48&v=4", console.log)
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