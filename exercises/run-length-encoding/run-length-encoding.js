export const encode = (word) => word === '' ? word : word
  .match(/(.)\1*/g)
  .reduce((acc, curr) => [...acc, curr.length === 1 ? '' : curr.length, curr[0]], [])
  .join('')

export const decode = (word) => word === '' ? word : word
  .match(/(\d+)?./g)
  .map(e => e[e.length - 1].repeat(isNaN(parseInt(e)) ? 1 : parseInt(e)))
  .join('')




// export function encode(word) {
//   let output = '', i, letterCount = 1;
// 	for(i = 0; i < word.length; i++) {
// 	    let letter = word[i];
// 	    if(letter === word[i+1]) {
// 	      letterCount++;
// 	    } else if(letterCount == 1) {
// 	    	output += letter;
// 	    } else {
// 		    output += letterCount + letter;
// 		    letterCount = 1;
// 	    }
// 	}
//   	return output;
// }

// export const decode = (word) => {
//   	let count = '', output = '';
// 	word.split('').forEach((letter) => {
// 		if (letter.match(/\d/)) {
//       		count += letter;
//     	} else {
//     		count = count ? parseInt(count, 10) : 1;
//     		for (let i = 0; i < count; i++) {
//     			output += letter;
//     		}
//      		count = '';
//     	}
//   	})
//   return output;
// }