function CalculatePi(NumberOfDigits) {
    this.data = {}
    this.name = ""
    var $ = this; 
    this._ = [
        function (x, y) {
            return this._[6](x, this._[9](x) + this._[9](y));
        }.bind($),

        function (x, y) {
            return this._[8](x, this._[9](y));
        }.bind($),
        
        function (x, y) {
            return this._[8](this._[9](x), y);
        }.bind($),

        function (x, y) {
            return this._[6](x, this._[9](x) / this._[9](y));
        }.bind($),

        function (x, y) {
            return this._[6](x, this._[9](x) - this._[9](y));
        }.bind($),

        function (x, y) {
            return this._[9](x) != this._[9](y);
        }.bind($),

        function (x, y) {
            this.data[-x] = Math.floor(y);
        }.bind($),

        function (x, y) {
            return this._[6](x, this._[9](x) % this._[9](y));
        }.bind($),
    
        function (x, y) {
            this.data[-x] = this._[9](y)
        }.bind($),
    
        function (x) {
            return (this.data[-x] == undefined) ? 0 : this.data[-x];
        }.bind($),
    
        function (x, y) {
            return this.name += this._[9](-6);
        }.bind($),

        function (x, y) {
            return this._[6](x, this._[9](x) * this._[9](y));
        }.bind($),

        function (x, y) {
            return this._[9](x) < this._[9](y);
        }.bind($),
    
        function (x, y) {
            return this._[9](x) > this._[9](y);
        }.bind($),

        function (y, n) {
            var x = "dermatoglyphics!?", m, x;
            for (var $ = 0; $ < y.length; ++$) {
                if ($ % 3 == 0)
                    {m = this._[x.indexOf(y[$])];}
                else if ($ % 3 == 1)
                    {a = -x.length + x.indexOf(y[$]);}
                else
                    {m = m(a, -x.length + x.indexOf(y[$]));}
            }
            return m;
        }.bind($),
    
        function (x, y) {
            return this._[14](x, y) ? this._[14](y, x) : undefined;
        }.bind($),

        function (x, y) {
            return this._[14](x, y) ? undefined : this._[14](y, x);
        }.bind($),

        function (x, y) {
            return this._[14](x, y) ? (this._[14](y, x), this._[17](x, y)) : undefined;
        }.bind($),

        function (x, z) {
            for (var $ in x) {
                this._[x[$][0]](x[$][1], x[$][2]);
            }
        }.bind($),

        function (x, y) {
            this._[18]([[14, "lcmlglhgtmgr", "csm"],
            [17, "cgs", "logaoaeoohotlpchpgdoplpghpeapalcomcpgoplpgaparpoaga"],
            [14, "lhilicmitdiylycgyt", "csm"],
            [16, "tit", "limdha"],
            [15, "t?m", "p?h"],
            [14, "d?a", "csm"]], undefined);
        }.bind($),

        function (x, y) {
            return this._[x](-1, -9) ? (this._[y](-1, -2), this._[y+1](x, y)) : undefined;
        }.bind($),
        
        function(x, y) {
            for (var $ in x) {
                this._[x[$][0]](x[$][1], x[$][2]);
            }
        }.bind($)
    ]
    this._[21]([[6, -9, NumberOfDigits], [6, -12, 10], [6, -13, 1], [6, -14, 0], 
                     [6, -15, 3], [14, "leraeal?mlslhstmsr", "csm"], [17, "csm", 
                      "l!sa!ar!easa"], [20, 12, 19], [18, -1, -2]], undefined);
}
