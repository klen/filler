require("libs/atom-full-compiled.js");
require("libs/libcanvas-full-compiled.js");

require("source/init.js");
require("source/game.js");


atom.dom(function(){

    window.game = new Filler.Game({
        appendTo: '.filler',
    }); // debug

});
