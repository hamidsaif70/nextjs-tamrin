const WINDOW = {}
if (process.browser) {
    WINDOW = window
} else {
    WINDOW = {
        doucument: {
            location: {}
        },
        localStorage: {}
    }
}
export default WINDOW