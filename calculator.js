function test(id){
    var one = document.getElementById(id);
    one.addEventListener("click", function(){
        var oneNumber = document.getElementById(id).value;
        document.getElementById("result").value += oneNumber;
    })
}
function clearData(){
    const clear = document.getElementById("clear");
    clear.addEventListener("click", function(){
        document.getElementById("result").value = ""
    })
}
clearData()
test("one")
test("two")
test("three")
test("four")
test("five")
test("six")
test("seven")
test("eight")
test("nine")
test("zero")