class Offset {
    getPageOffset () {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    }

    getOffset (event) {
        return {
            x: event.offsetX,
            y: event.offsetY
        }
    }
}
module.exports = new Offset()
