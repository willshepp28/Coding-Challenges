


const decodeString = s => {
    const arr = [];

    for(const char of s){
        if(char !== "]") {
            arr.push(char);
            continue;
        }

        console.log(arr);


    }

    console.log(arr);


}

 decodeString("a3[b]by2[p]")


