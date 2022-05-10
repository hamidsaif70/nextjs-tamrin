import WINDOW from '../utils/WINDOW'
export default function setLocalStorage(key, value) {
    function set() { WINDOW.localStorage.setItem(key, value) }

    function get() { WINDOW.localStorage.getItem(key) }

    const value = get(key)
    return [value, setValue]
}