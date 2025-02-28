console.log("Its working");
import toDoList from "./todo.js";
import printToDoListAll from "./print-todo.js";
import chalk from "chalk";



console.log(toDoList);
printToDoListAll.ifTrue(toDoList);
printToDoListAll.printToDoList(toDoList);
const readBooks = printToDoListAll.printTitle(toDoList,"read books");
console.log(readBooks);



