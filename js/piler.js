"use strict"
// underscore.jsに依存
function piler(pile){
    // pileが配列以外なら例外出す
    function verifyPile(pile){
        if ( ! (pile instanceof Array) ){
            throw "error: argument is not an Array"
        }
    }
    verifyPile(pile);

    var initPile = [].concat(pile); // 初期状態をキャッシュ
    var length = function(){         // getterメソッドとして実装
        return pile.length ; 
    } 
    
    // underscore.jsで書き換える
    var random = function(num){
        return Math.floor(Math.random() * num);
    }
        
    var shuffle = function(){
        pile = _.shuffle(pile);
    }
    
    var open = function(_idx, num){
        _idx = _idx || 0;
        num = arguments[1] || pile.length;        
        return pile.slice(_idx, _idx + num);
    }

    var reverseOpen = function(_idx, num){    // _.jsで非破壊ソートしようよ　-> indexOfで探せばよくね
        _idx = _idx  || 0;
        num = arguments[1] || 0;
        var _rsl = new Array(num);
        var _start = _maxIdx - _idx;
        
        for (var _i = 0; _i < num ; _i++){
            _rsl[_i] = pile[_start - _i];
        }
        
        return _rsl;
    }



    var draw = function(num){     // 引数なしで全部引く。  
        if(num === undefined){    // === undefined使うってどうよ？
            num = 0;
        }       
        if(length > 0){
            var drawed = pile.splice(num, 1);
            return drawed;
        }
    }

    var drawRandom = function(num){    // drawのnumに乱数ぶっこめばよくね
        var drawed = []   
        for (var i = 0; num > i; i++){    
            if(pile.length > 0){
                drawed += draw(_.random(0,pile.length));
            }
        }
        return drawed;
    }
    
    var reset = function(){
        pile = [].concat(_initPile);
        updateLength();
    }
    
    
    var put = function(_put, _idx){    
        pile = pile.concat(_put);
        updateLength();                   //  iranai
        return _put;
    }
    
    var cut = function(num){
        var _cut = pile.splice(0, Math.ceil(length/2));
        updateLength();                   // iranai
        return piler(_cut);
    }
    
    var concatPile = function(pileObj){
        pile = pile.concat(pileObj.opennAll());
        updateLength();
//        delete pileObj;  // global objectをdeleteする必要がある
    }


    var uniqObjDraw = function(obj){    // drawTargetObj
        return draw(pile.indexOf(obj));
        
    } 

    var uniqObjSearch = function(obj){  // getObjIndex(同値は探せない)
        return pile.indexOf(obj);
        
    } 


    
// _で書き換えろ[配列で帰ってくる]    
    var search = function(fn){     // _のフィルターかなんかで書き換えよう. ex) function(x){if(x.num === 1){return x}} 
        var _rsl;
        for (var _i = 0; _i < length; _i++){
            if (fn(pile[_i])){
                return _i;
            }
        }
    } 
    
// _で書き換えろ
    var uniqNumberSearch = function(num){
        var fn = function(x){
            if(x === num){
                return true;
            }
        }
        return uniqSearch(fn);
    }
    
    return {
        // プロパティ

        // メソッド
        length: length,
        uniqObjDraw: uniqObjDraw,
        uniqObjSearch: uniqObjSearch,
        draw: draw,
        drawrRandom: drawRandom,
        shuffle: shuffle,
        reset: reset,
        open: open,
        rOpen: reverseOpen,
        openAll: function() { return open(1, length());},
        put: put,
        cut: cut,
        concat: concatPile
//        uniqSearch: uniqSearch,
//        uniqNumberSearch: uniqNumberSearch
    };    
}