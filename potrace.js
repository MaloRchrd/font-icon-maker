var potrace = require("potrace");
var fs = require("fs");

fs.readdir("icons/", function (error, files) {
  //   console.log(files);

  var totalFiles = files.length; // return the number of files
  console.log(totalFiles); // print the total number of files
  for (let i = 0; i < files.length; i++) {
    if (files[i] != ".DS_Store") {
      potrace.trace("icons/" + files[i] + "", function (err, svg) {
        if (err) throw err;
        fs.writeFileSync(
          "assets/icons/original/" + files[i].replace(".png", "") + ".svg",
          svg
        );
      });
    }
  }
  console.log("SVGs created with success");
});
