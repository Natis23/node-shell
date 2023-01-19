module.exports = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim(); //remove the newline
    if (cmd === "pwd") {
      console.log(process.cwd());
      process.stdout.write("\nprompt > ");
    }
  });
};