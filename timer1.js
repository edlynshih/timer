for (let i = 2; i < process.argv.length; i++) {
let time = process.argv[i];
  if(!isNaN(time) && time > 0) {
    setTimeout(() => {
      require("child_process").exec("afplay /System/Library/Sounds/Glass.aiff");
    }, time * 1000);
  }
}