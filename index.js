// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log('a is array?' + Array.isArray(a));
console.log('b is array?' + (b instanceof Array));


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var newArr = [];
a.forEach(function (item, index) {
	item = item * 2;
	newArr.push(item);
});
console.log(newArr);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var s1 = '';
for (var i = 0; i < colors.length; i++) {
	if (i == colors.length - 1) {
		s1 += colors[i];
	} else {
		s1 += colors[i] + " ";
	}
}
console.log(s1);
// case 2 output: 'Red+Green+White+Black'
var s2 = s1.replaceAll(" ", "+");
console.log(s2);
// case 3 output: 'Red,Green,White,Black'
console.log(colors.toString());


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort((a,b) => {
	return -(a-b);
})
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(arr) {
	// body...
	var entry;
	var maxNum = 1;
	var obj = arr.reduce((prev, index) => {
		prev[index] ? prev[index]++ : prev[index] = 1;
		if (prev[index] > maxNum) {
			entry = index;
			maxNum++;
		}
		return prev;
	}, {}); 
	return entry;
}
findMost(a);