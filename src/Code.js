function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function sayHi() {
  Logger.log("Hi");
  return "Hi";
}