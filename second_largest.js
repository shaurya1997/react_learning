

function second_largest_element(arr){
	let first = second = Number.MIN_VALUE;
	if(arr.length<2){
		
		console.log("not possible");

	}
	else{
    for (let i=0;i<arr.length;i++){
  
        if (arr[i]>first){
            second=first;
            first=arr[i];
        }
 
        else if(arr[i]>second&&arr[i]!=first)
            second = arr[i];
    }
    
    if(second==Number.MIN_VALUE)
        console.log("There is no second largest element");
    else
       console.log("The second largest element is :",+ second);
}
}
