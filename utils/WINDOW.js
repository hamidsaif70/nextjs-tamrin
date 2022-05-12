let WINDOW = {}
if (process.browser) {
    WINDOW = window
} else {
    WINDOW = {
        doucument: {
            location: {}
        },
        localStorage: {
            getItem: () => {},
            setItem: () => {}
        }
    }
}
export default WINDOW