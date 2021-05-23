const { React } = goosemodScope.webpackModules.common
const { useState, useRef, useEffect } = React
import { useToggle } from "./hooks"

const DropZone = props => {
    const divRef = useRef()
    const [fileDrop, fileAnim, animEnd] = useToggle()

    const evOn = ["dragenter", "dragover"],
        evOff = ["dragleave", "drop"]

    //functions need to be defined in consts, because we need stable ref to destroy them
    const [dragging, drOn, drOff] = useToggle()
    const drop = e => {
        console.log("drop!")
        let files = [...e.dataTransfer.files]
        console.log(files)
        if (!files || files.length < 1) {
            goosemodScope.showToast(
                "no files were included in that drop - ensure discord is focused",
                {
                    timeout: 6000,
                    type: "error"
                }
            )
            return
        }
        console.log("file!")
        fileAnim()
    }

    //prevent default events, so drag and drop works as intended
    const prev = e => {
        e.stopPropagation()
        e.preventDefault()
    }

    //insane function to add or remove all the events
    const changeEvents = add => {
        let target = divRef.current
        //use the add or remove conditionally
        const evFn = add ?
            (ev, fn) => target.addEventListener(ev, fn)
            :
            (ev, fn) => target.removeEventListener(ev, fn);

        //spread all the events, prevent default event
        [...evOn, ...evOff].forEach(ev => evFn(ev, prev))
        //add/remove the drag on and drag off animation functions
        evOn.forEach(ev => evFn(ev, drOn))
        evOff.forEach(ev => evFn(ev, drOff))
        //add/remove the drop file handling function
        evFn("drop", drop)
    }


    //bind to the events, because react binding doesnt work
    useEffect(
        () => {
            changeEvents(true)
            return () => changeEvents(false)
        },
        [divRef]
    )

    return <div
        ref={divRef}
        dragging={dragging}
        fileDrop={fileDrop}
        onAnimationEnd={animEnd}
        className={"fileDragZone"}
    >
    </div>
}

export default DropZone