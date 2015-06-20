
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var length = arrayOfNums.length, sum = 0
	for(var i = 0; i < length; i++)
		sum = sum + arrayOfNums[i];
	return sum;
	
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var length = arrayOfNums.length, sum = 0;
	arrayOfNums.sort();
	//console.log(arrayOfNums);
	if(length > 0)
	{
		sum = arrayOfNums[0];
		for(var i =0; i < length-1; i++)
		{
			if(arrayOfNums[i] != arrayOfNums[i+1])
			{
				sum = sum + arrayOfNums[i+1];
			}
		}
		//console.log(sum);
		return sum;
	}
	else 
		return 0;
}

exports.ReverseString = function(str){
	return str.split('').reverse().join('');
}

exports.ReverseArrayOfStrings = function(arrayOfStrings){
	return arrayOfStrings.reverse();
}