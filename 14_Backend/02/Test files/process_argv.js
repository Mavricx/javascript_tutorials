console.log(process.argv);
//[
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\CODES\\Javascript\\javascript_tutorials\\14_Backend\\process_argv.js'
//   ]

let args=process.argv;

for(let i=0;i<args.length;i++){
    console.log("hello & welcome to ", args[i]);
}

//node process_argv.js hello my dear priyanshu pattanayak
//by runining this we get ->
// hello & welcome to  C:\Program Files\nodejs\node.exe
// hello & welcome to  C:\CODES\Javascript\javascript_tutorials\14_Backend\process_argv.js
// hello & welcome to  hello
// hello & welcome to  my
// hello & welcome to  dear
// hello & welcome to  priyanshu
// hello & welcome to  pattanayak