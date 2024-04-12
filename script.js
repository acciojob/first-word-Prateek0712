function firstWord(s) {
  // your code here
	s=s.trim();
	let newStr="";
	let i=0;
	while(s[i]!=" ")
		{
			newStr+=s[i];
			i++;
		}
	return newStr;
}

// Do not change the code below

//const s = prompt("Enter String:");
alert(firstWord(s));
