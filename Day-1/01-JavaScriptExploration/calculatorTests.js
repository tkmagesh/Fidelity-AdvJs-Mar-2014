window.addEventListener("DOMContentLoaded",init);
	function init(){
		test("Adding two numbers",function(){
			//Arrange
			var n1 = 10
				, n2 = 20
				, expectedResult = 30;

			//Act
			var result = sum(n1,n2);

			//Assert
			return result === expectedResult;
		});

		test("Adding two numbers in string format",function(){
			
		});

		test("Should be able to accept functions returning numbers",function(){
			return false;
		});

		test("Should be able to accept function returning numbers in string format",function(){
			return false;
		});

		test("Should be able to accept functions returning functions returing numbers",function(){
			return false;
		});

		test("Should be able to accept functions returning functions returing numbers in string format",function(){
			return false;
		});		

		test("Should be able to add just 1 argument",function(){
			return false;
		});

		test("Should be able to add more than 2 arguments",function(){
			return false;
		});

		test("Should return 0 in the absence of any arguments",function(){
			return false;
		});

		test("Should be able to accept an array of numbers",function(){
			return false;
		});

		test("Should be able to accept an array of numbers in string format",function(){
			return false;
		});

		test("Should be able to accept an array of functions returning numbers",function(){
			return false;
		});


	}
