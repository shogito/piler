describe("pilerの初期化テスト",function(){
    it("配列オブジェクト",function(){
    	p = piler([1,2,3,4,5])
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