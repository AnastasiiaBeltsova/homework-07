const func = (str, letters) => {
  if(!letters || letters.length === 0) {
        return str;
    };

  const stringLetters = str.split('');
  const resultLetters = [];
  
  for(let i in stringLetters) {
    if(!letters.includes(stringLetters[i])) {
      resultLetters.push(stringLetters[i]);
    }
  }
  return resultLetters.join('');
};

console.log(func("hello world", ['l', 'd'])); 
