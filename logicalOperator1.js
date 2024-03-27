/**
 * /*
 *   Logical Operators
 *   ---------------------------------
 *   Using logical operators complete the unfinished statements.
 *   The variables should have values that match the expected results.
 *
 * @format
 */
✅
// Do not change the name of variables
let htmlLevel;
let cssLevel;
htmlLevel = 5
cssLevel = 4
// Finish the statement to check whether HTML, CSS knowledge are above 5
// (hint: use the comparison operator from before)
let htmlLevelAbove5;
let cssLevelAbove5;

// Finish the next two statement
// Use the previous variables and logical operators
// Do not "hardcode" the answers
let cssAndHtmlAbove5;
let cssOrHtmlAbove5;
// htmlLevelAbove5 = 5
if (htmlLevel >=5) {
  htmlLevelAbove5 = true
}
// ***
if (cssLevel>=5) {
  cssLevelAbove5= true
}else{
  cssLevelAbove5 = false
}
// ***
if(htmlLevel>=5&&cssLevel>+5){
  cssAndHtmlAbove5 = true
}else{
  cssAndHtmlAbove5 = false
}
// ***

if (htmlLevel>= 5 ||cssLevel>=5) {
  cssOrHtmlAbove5 = true
}else{
  cssOrHtmlAbove5 = false
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log('Is Html knowledge above 5?', htmlLevelAbove5);
console.log('Is CSS knowledge above 5?', cssLevelAbove5);
console.log('Is Html And CSS knowledge above 5?', cssAndHtmlAbove5);
console.log('Is either Html or CSS knowledge above 5?', cssOrHtmlAbove5);

/* 
  EXPECTED RESULT
  ---------------
  Is Html knowledge above 5? true
  Is CSS knowledge above 5? false
  Is Html And CSS knowledge above 5? false
  Is either Html or CSS knowledge above 5? true
*/
