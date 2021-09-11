class Scroll {
    getOffset (el) {
        // const rect = el.getBoundingClientRect()
        return {
            x: window.scrollX,
            y: window.scrollY
        }
    }

    handleScroll (tagItem) {
        this.scrollShowCardPerson(tagItem)
    }

    destroyed () {
        window.removeEventListener('scroll', () => this.handleScroll(this.tagItem))
    }
}

module.exports = new Scroll()
