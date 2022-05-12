import WINDOW from '../utils/WINDOW'
export default function setLocalStorage(key) {
    function getValue() {
        return WINDOW.localStorage.getItem(key)
    }

    function setValue(value) {


        return WINDOW.localStorage.setItem(key, value)
    }
    setValue(key)
    let value = () => { return WINDOW.localStorage.getItem(key) }

    return [value, setValue]
}