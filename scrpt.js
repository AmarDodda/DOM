// // Function to create label element
// function label_create(tagname, attr1, attrval1, content) {
//     var ele = document.createElement(tagname);
//     ele.setAttribute(attr1, attrval1);
//     ele.innerHTML = content;
//     return ele;
// }

// // Function to create line break element
// function break_create() {
//     var break_ele = document.createElement("br");
//     return break_ele;
// }

// // Function to create input element
// function input_create(tagname, attr1, attrval1, idname) {
//     var input_ele = document.createElement(tagname);
//     input_ele.setAttribute(attr1, attrval1);
//     input_ele.className = "main";
//     input_ele.id = idname;
//     return input_ele;
// }

// // Function to create button element
// function button_create(tagname, attr1, attrval1, content, onclick_function) {
//     var btn = document.createElement(tagname);
//     btn.setAttribute(attr1, attrval1);
//     btn.innerHTML = content;
//     btn.setAttribute("onclick", onclick_function);
//     return btn;
// }

// // Creating label, input elements for email
// var email_label = label_create("label", "for", "email", "Email:");
// var email_break = break_create();
// var email_input = input_create("input", "type", "email", "email");
// var email_input_break = break_create();

// // Creating label, input elements for password
// var password_label = label_create("label", "for", "password", "Password:");
// var password_break = break_create();
// var password_input = input_create("input", "type", "password", "password");
// var password_input_break = break_create();

// // Creating submit button and break element
// var submit_btn = button_create("button", "type", "button", "Submit", "logEnteredValues()");
// var btn_break = break_create();

// // Appending elements to the document body
// document.body.append(email_label, email_break, email_input, email_input_break,
//                       password_label, password_break, password_input, password_input_break,
//                       submit_btn, btn_break);

// // Function to log entered values
// function logEnteredValues() {
//     // Retrieve the entered values
//     var email_value = document.getElementById("email").value;
//     var password_value = document.getElementById("password").value;

//     // Log the values to the console
//     console.log("Entered Email:", email_value);
//     console.log("Entered Password:", password_value);
// }


let box=document.querySelector(".box");

box.addEventListener("mouseover",()=>{
    box.style.color = "yellow"

});

