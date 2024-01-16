class WorldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage = config.upperSrc;
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0)
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0)
    }
}

window.WorldMap = {
    DemoRoom: {
        lowerSrc: 'images/maps/DemoLower.png',
        upperSrc: 'images/maps/DemoUpper.png',
        gameObjects: {
            hero: new GameObject({
                x: 5,
                y: 6,
                src: 'images/characters/people/hero.png'
            }),
            npc1: new GameObject({
                x: 7,
                y: 9,
                src: 'images/characters/people/npc1.png'
            })
        }
    }
}