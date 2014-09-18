describe("pilerの初期化テスト",function(){
    it("配列オブジェクト",function(){
    	var p = piler([1,2,3,4,5])
    	expect(p).toBeDefined()
    })

    it("文字列", function(){
        var func = function(){
        	piler("");
        }
    	expect(func).toThrow('error: argument is not an Array')
    })

    it("オブジェクト", function(){
    	var func = function(){
    		piler({});
    	}
    	expect(func).toThrow('error: argument is not an Array')
    })
})

describe("piler.lengthのテスト", function(){
    beforeEach(function(){        
        this.p = [1,2,3,4,5];
        this.pile = piler(this.p);
    })
    // pのlengthとpileのlengthは等しい
    it("length参照テスト1",function(){
    	expect(this.pile.length()).toEqual(this.p.length);
    })

    // 更新系実行後のテスト書け
    // プロパティだと外から更新かけられるからからやっぱgetterにしたほうがいいかも

})



describe("openメソッドのテスト",function(){
    beforeEach(function(){
        var p = [1,2,3,4,5];
        var pile = piler(p);

    })
    // openはpileのlenghtを変動させない(非破壊)
    // 引数なし -> 全て表示する
 
    // 引数一つあり -> 対象のindexのオブジェクトだけ[]でwrapしてかえす

    // 引数一つあり(out of range) -> []を返す

    // 引数ふたつ -> 第一引数から第二引数個分配列で返す

    // 配列数よりも引数に渡したindexが多い場合

})