/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * 
 * node tasks.js batata
 * 
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text==='exit\n') {
    quit();
  }
  else if(text === 'hello\n'){
    hello();
  }
  else if (text==='help\n'){
    help();
  }
  else if (text.substr(0,6)=="remove"){
    remove(text.trim());
  }
  else if (text==='list\n'){
    list(arr);
  }
  else if (text.substr(0,6)=="hello "){
    addText(text);
  }
  else if (text.substr(0,4)=="add "){
    tasks(text);
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Abdulrhman Soukarieh")

/**
 * lists all the possible commands
 *
 * @returns {void}
 */
 function help (){
  console.log(" quit : quit the app\n","Exit : Exit the app\n","hello : say hello app name\n","hello with text : return hello with text!\n" , "list : list all tasks\n", "add : add task to first index of array\n" , "remove: remove the last index of array \n" , "remove 1: remove the first index of array\n" , "remove 2 : remove the second task in array" ) 
 };

function addText(text){
        console.log(text.replace("\n","")+"!");
}

const arr = ["first task " , "second task" , "third task"];


function list(arr){
  var i ; 
  for(i = 0 ; i<arr.length ; i++){
    console.log( i+1 +" "+arr[i]);
  }
}

function tasks(text){

 var item =  text.replace("add","");
  if(item.trim()==""){
    console.log("error")
  }else {
  arr.push(item.trim())
  }
  }

function remove(text){
  if(text=='remove'){
    arr.pop();
  }
  else if(text=='remove 1'){
    arr.shift();
  }
  else if (text=='remove 2'){
    arr.splice(1,1);
  }
  else{
    console.log("Number added not exist")
  }
}