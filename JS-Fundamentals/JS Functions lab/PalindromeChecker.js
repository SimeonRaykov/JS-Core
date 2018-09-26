function palindromeChecker(str) {

    let isPalindrome=str.split("").reverse().join("");

    console.log(isPalindrome===str);

}
palindromeChecker(`haha`);
palindromeChecker(`abba`);