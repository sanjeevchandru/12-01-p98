document.write("62. to move the last three characters to the start of a given string."+"<br>");
function test62(str){
    var x=str.substring(str.length-3);
    var y=str.slice(0,str.length-3);
     return x+y;
}
document.write("The string :sanjeev , ans :"+test62("sanjeev")+"<br>");
document.write("The string :python , ans :"+test62("python")+"<br><br>");