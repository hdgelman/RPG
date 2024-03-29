class Sprite {
    constructor(config) {

        // Configure the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onLoad = () => {
            this.isLoaded = true;
        }

        // Configure animation and initial state
        this.animations = config.animations || {
            idleDown: [
                [0, 0]
            ]
        }
        this.currentAnimation = config.currentAnimation || 'idleDown';
        this.currentAnimationFrame = 0;

        //Reference the game object
        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;

        this.isLoaded && ctx.drawImage(this.image,
            0, 0,
            32, 32,
            x, y,
            32, 32)
    }
}