import ProjectInit from './init/project_init.js';

let args = process.argv;
if("init" == args[2]){
  let myInit = new ProjectInit();
  myInit.init();
}
