let dragState = true, uploadArea

const set = state => {
    if(dragState === state) return
    dragState = state
    uploadArea.style.display = dragState ? "flex" : "none"
}

const getEl = () => {
    let elements = document.getElementsByClassName("uploadArea-1qnBZm uploadArea-3QgLtW")
    uploadArea = elements[0]
}

export default { set, getEl }