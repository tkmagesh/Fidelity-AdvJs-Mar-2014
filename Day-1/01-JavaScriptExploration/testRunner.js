function test(title,testFn){
		var testItem = document.createElement("li");
		testItem.innerHTML = title;
		var result = testFn();
		testItem.classList.add(result ? "pass" : "fail");
		document.getElementById("ulCaseList").appendChild(testItem);
	}