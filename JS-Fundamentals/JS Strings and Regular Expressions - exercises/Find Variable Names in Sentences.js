function findVariableNamesInSentences(text) {

    let pattern=/\b_[a-zA-Z0-9]*\b/g;
    let result=text.match(pattern);

    let finalResult=result.map((e)=>{
        return e.substr(1);
    });

    console.log(finalResult.join(','));
}

findVariableNamesInSentences('The _id and _age variables are both integers.');