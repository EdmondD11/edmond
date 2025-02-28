import chalk from "chalk";

const printToDoList = (list)=> {
    list.forEach((listOfTodo)=>{
        console.log(`${listOfTodo.title} is ${listOfTodo.isDone}`);
        
    })

};

const printTitle = (list,titleOfList)=>{
    const filterTodo = list.filter((toDoList)=>{
        return toDoList.title===titleOfList;
    })
    return filterTodo;
};
const ifTrue = (list) =>{
    
    list.forEach((listOfTodo)=>{
        let color;
        if(listOfTodo.isDone){    
             color= chalk.green;
        }else{
              color= chalk.red;
        }
        console.log(color(listOfTodo.title));
        
        });

};






export default {
    printToDoList,
    printTitle,
    ifTrue
}