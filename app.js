let textarea = document.getElementById("textarea");
textarea.addEventListener("input", function () {
  let text = this.value;
  document.getElementById("character").innerHTML = text.length;
  text = text.trim();
  text= text.split(" ");
  words= text.filter(function (element) {
      if (element!=" ") {
          return element;
      }
  })
  length=words.length;
  document.getElementById('words').innerHTML= length;

  
});
