class World {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector('.game-canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        };
        image.src = 'images/maps/DemoLower.png';

        const x = 55;
        const y = 65;

        const shadow = new Image();
        shadow.onload = () => {

        }

        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0, // left cut
                0, // top cut
                32, // width of cut
                32, // height of 
                x,
                y,
                32,
                32
            )
        }
        hero.src = 'images/characters/people/hero.png';
    }
}