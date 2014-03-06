function isPrime(n){
	if (typeof isPrime[n] !== "undefined"){
		console.log("from cache..");
		return isPrime[n];
	}
	console.log("brewed fresh..");
	isPrime[n] = true;
	for(var i=2;i<=(n/2);i++){
		if (n % i === 0){
			isPrime[n] = false;
			break;
		}
	}
	return isPrime[n];
}

//convert the above function in such a way that the results are not publicly accessible retaining the core functionality