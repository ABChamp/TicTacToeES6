class Player {
    constructor(name = "unknown") {
        this.name = name
        this.score = 0
    }

    getName() {
        return this.name
    }

    getScore() {
        return this.score
    }

    sumScore() {
        return this.score += 1
    }
    
}

// ไม่มี default แต่ต่างกันยังไง
module.exports = Player