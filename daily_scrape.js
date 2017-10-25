function autoScrape() {
  //get the active sheet
  var sheet = SpreadsheetApp.getActiveSheet();
  //get the total extent of the current data
  var datarange = sheet.getDataRange();
  //the last row and column numbers
  var numRows = datarange.getNumRows();
  var numColumns = datarange.getNumColumns();
  //the next row, that you're going to populate with your new values
  var nextRows = numRows + 1;
  //populate the first column of the empty row with the date
  sheet.getRange(nextRows,1).setValue(new Date());
  //run a loop through each column
  for (var i=1; i<=numColumns; i++){
  //for each column, get the formula from the second row of that column
    var scrapedata= sheet.getRange(2,i).getValue();
  //set the last row of that column to the value of the function
    sheet.getRange(numRows + 1,i).setValue(scrapedata);
  }
}
