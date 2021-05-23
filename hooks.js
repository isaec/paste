const { React } = goosemodScope.webpackModules.common
const { useState, useRef, useEffect } = React

const useToggle = init => {
    const [value, setValue] = useState(init || 0)
    return [value, () => setValue(1), () => setValue(0)]
}

export { useToggle }