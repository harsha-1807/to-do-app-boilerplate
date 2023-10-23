
// input tag
var inputText = document.getElementById("input")

// add button tag 
var subBtn = document.getElementById("button")

// Todo list 
var todoListTag = document.getElementById("todolist")

// if(localStorage.getItem("todoArr")!= 0){
//     var todoArr = JSON.parse(localStorage.getItem("todoArr"))
// }else{
//     var todoArr=[]
// }
var todoArr = JSON.parse(localStorage.getItem("todoArr")) || []
display()

// array to store all todo elements ,initially empty
var todoArr = []

// when Add button is clicked
subBtn.addEventListener("click",addItemToArray);

// If input is on FOCUS and Enter is pressed addItemtoArray should be called to Add element to array
inputText.addEventListener('keypress', (event)=>{
    // console.log(event.key);
    if(event.key == "Enter"){
        addItemToArray()
    }
})


function addItemToArray(){
    // push the value to array
    if(inputText.value !=""){
        todoArr.push(inputText.value)

    }

    // reset the value to empty string 
    inputText.value =""

    // console.log("todoArr:",todoArr);
    localStorage.setItem("todoArray",JSON.stringify(todoArr))
    display();
}
 
function display(){
    // clear out previous old ones everytime we add one item to array and display it
    todoListTag.innerHTML = "" ;

    // map through array and display
    todoArr.map((curr,i)=>{
        // structure of li tag
        var listItem =`<li id="item${i}">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})">&times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
      </li>`;

        // insert it inside <ul id="todolist"
      todoListTag.innerHTML += listItem
    })
    
}


function deleteItem(index){
    todoArr.splice(index,1)
    localStorage.setItem("todoArray",JSON.stringify(todoArr))
    display();
}


function editItem(index){
    var newValue = prompt("Pls edit ")
    // insert the value to array at that value
    todoArr.splice(index,1,newValue)
    localStorage.setItem("todoArray",JSON.stringify(todoArr))
    display()
}

// reset the todo list
document.getElementById("reset").addEventListener("click",()=>{
    todoArr = []
    localStorage.setItem("todoArray",JSON.stringify(todoArr))
    display();
})


// Local storage 
var CartArr =["Book","Pen","Eraser"]
localStorage.setItem("Cart",JSON.stringify(CartArr))


CartArr.push("scale")
sessionStorage.setItem("cart",JSON.stringify(CartArr))
console.log("cartarr:",CartArr)



var tempArr = JSON.parse(localStorage.getItem("cart"))
console.log(tempArr)

// var x = 20 || 30
