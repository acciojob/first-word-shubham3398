function firstWord(s) {
  // your code here
	s = s.trim();
	let ans = "";

	for(let ch of s){
		if(ch === ' ') return ans;
		ans += ch;
	}

	return ans;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));  
