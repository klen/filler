atom.declare('Filler.Graphic.Button', {

    parent: App.Element,

    configure: function(){
        var game = this.settings.get('game');

        this.value = this.settings.get('value');
        this.color = this.settings.get('color');
        this.disabled = false;
        this.stroke = this.shape.clone().snapToPixel();

        this.behaviors = new Behaviors(this);
        this.behaviors.add('Clickable', this.redraw).start();

        game.events.add('start', this.move.bind(this));
        this.events.add('mousedown', function(){
            game.player.move(this.value);
        });
        
    },

    move: function(moves, values){
        this.disabled = values.indexOf(this.value) < 0;
        this.redraw();
    },

    renderTo: function(ctx){
        if (this.hover && !this.disabled){
            ctx.fill(this.shape, this.color[0]);
        } else {
            ctx.fill(this.shape, this.disabled ? '#000' : ctx.createGradient(this.shape, this.color));
        }
        ctx.stroke(this.stroke, this.color[1]);
    }

});
