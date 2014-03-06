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
			//Arrange
			var n1 = "10"
				, n2 = "20"
				, expectedResult = 30;

			//Act
			var result = sum(n1,n2);

			//Assert
			return result === expectedResult;
		});

		test("Should be able to accept functions returning numbers",function(){
			var f1 = function(){ return 10;},
				f2 = function(){ return 20;},
				expectedResult = 30;

			var result = sum(f1,f2);

			return result === expectedResult;	
		});

		test("Should be able to accept function returning numbers in string format",function(){
			var f1 = function(){ return "10";},
				f2 = function(){ return "20";},
				expectedResult = 30;

			var result = sum(f1,f2);

			return result === expectedResult;	
		});

		test("Should be able to accept functions returning functions returing numbers",function(){
			var f1 = function(){ return function(){ return 10;}},
				f2 = function(){ return function(){ return 20;}},
				expectedResult = 30;

			var result = sum(f1,f2);

			return result === expectedResult;	
		});

		test("Should be able to accept functions returning functions returing numbers in string format",function(){
			var f1 = function(){ return function(){ return "10";}},
				f2 = function(){ return function(){ return "20";}},
				expectedResult = 30;

			var result = sum(f1,f2);

			return result === expectedResult;	
		});		

		test("Should be able to add just 1 argument",function(){
			var n1 = 10,
				expectedResult = 10;

			var result = sum(n1);

			return result === expectedResult;	
		});

		test("Should be able to add more than 2 arguments",function(){
			var n1 = 10,
				n2 = 20,
				n3 = 30,
				n4 = 40,
				expectedResult = 100;

			var result = sum(n1,n2,n3,n4);

			return result === expectedResult;
		});

		test("Should return 0 in the absence of any arguments",function(){
			var expectedResult = 0;

			var result = sum();

			return result === expectedResult;
		});

		test("Should be able to accept an array of numbers",function(){
			var numbers = [10,20,30,40],
				expectedResult = 100;

			var result = sum(numbers);

			return result === expectedResult;
		});

		test("Should be able to accept a nested array of numbers",function(){
			var numbers = [10,[20,[30,[40]]]],
				expectedResult = 100;

			var result = sum(numbers);

			return result === expectedResult;
		});

		test("Should be able to accept an array of numbers in string format",function(){
			var numbers = ["10","20","30","40"],
				expectedResult = 100;

			var result = sum(numbers);

			return result === expectedResult;
		});

		test("Should be able to accept an array of functions returning numbers",function(){
			var f1 = function(){ return function(){ return 10;}},
				f2 = function(){ return function(){ return 20;}},
				expectedResult = 30;

			var result = sum([f1,f2]);

			return result === expectedResult;	
		});

		test("Should be able to accept an array of functions returning numbers in string format",function(){
			var f1 = function(){ return function(){ return "10";}},
				f2 = function(){ return function(){ return "20";}},
				expectedResult = 30;

			var result = sum([f1,f2]);

			return result === expectedResult;	
		});
		test("Should be able to accept an array of functions returning array of numbers in string format",function(){
			var f1 = function(){ return function(){ return ["10","20"];}},
				f2 = function(){ return function(){ return ["30","40"];}},
				expectedResult = 100;

			var result = sum([f1,f2]);

			return result === expectedResult;	
		});


	}
