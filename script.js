function firstWord(s) {
  // your code here
	if(s.length === 0){
		return "''";
	}
	let ans = "";

	for(let ch of s){
		if(ch === ' ') return ans;
		ans += ch;
	}

	return ans;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));  
