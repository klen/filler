atom.declare('Filler.Utils', {

    own: {
        
        getModel: function(obj){
            var min = 999, max = 0, minkeys = [], maxkeys = [], n, o;

            for (n in obj) if (obj.hasOwnProperty(n)) {
                o = obj[n];
                if (o > max) {
                    maxkeys = [ n ];
                    max = o;
                } else if (o == max) {
                    maxkeys.push(n);
                }
                if (o < min) {
                    minkeys = [ n ];
                    min = o;
                } else if (o == min) {
                    minkeys.push(n);
                }
            }
            return { max: max, min: min, maxkeys: maxkeys, minkeys: minkeys };
        }
        
    }

});
