describe("_のロード確認", function(){
	it("_のロード確認", function(){
		expect(_).toBeDefined;
	})
})

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

})



describe("openメソッドのテスト",function(){
    beforeEach(function(){
        this.p = [1,2,3,4,5];
        this.pile = piler(this.p);

    })
    // openはpileのlenghtを変動させない(非破壊)
    // 引数なし -> 全て表示する
    it("pile.open(引数なし)",function(){
    	expect(this.pile.open()).toEqual(this.p);
    	expect(this.pile.length()).toEqual(5);
    })
    // 引数一つあり -> 対象のindexのオブジェクトから一番後ろまで[]でwrapしてかえす
    it("pile.open(0)",function(){
    	expect(this.pile.open(2)).toEqual([3,4,5]);
    	expect(this.pile.length()).toEqual(5);   	
    })

    // 引数一つあり(out of range) -> []を返す
    it("pile.open(out of range)",function(){
    	expect(this.pile.open(5)).toEqual([]);
    	expect(this.pile.length()).toEqual(5);   	
    })

    // 引数ふたつで一個だけ -> 第一引数のindexから第二引数個返す
    it("pile.open(2,1)",function(){
    	expect(this.pile.open(2,1)).toEqual([3]);
    	expect(this.pile.length()).toEqual(5);   	
    })

    // 引数ふたつ -> 第一引数から第二引数個分配列で返す
    it("pile.open(2,3)",function(){
    	expect(this.pile.open(2,3)).toEqual([3,4,5]);
    	expect(this.pile.length()).toEqual(5);   	
    })

    // 引数ふたつ(第一引数が最大indexと一緒)
    it("pile.open(this.pile.length() - 1,3)",function(){
    	expect(this.pile.open(this.pile.length() - 1,3)).toEqual([5]);
    	expect(this.pile.length()).toEqual(5);   	
    })

    // 引数ふたつで第一引数がマイナス方向にout of range
    it("pile.open(-1,5)",function(){
    	expect(this.pile.open(-1,5)).toEqual([]);
    	expect(this.pile.length()).toEqual(5);   	
    })

    // 引数ふたつで第一引数がプラス方向にout of range
    it("pile.open(5,5)",function(){
    	expect(this.pile.open(5,5)).toEqual([]);
    	expect(this.pile.length()).toEqual(5);   	
    })

    // 配列数よりも第二引数に渡したindexがout of range
    it("pile.open(5,5)",function(){
    	expect(this.pile.open(2,18)).toEqual([3,4,5]);
    	expect(this.pile.length()).toEqual(5);   	
    })


})