# google-sheets-scraper
Scrape a website on a regular basis and add as a row on Google Sheets
## Set up your spreadsheet
This function is designed to run on a sheet that looks like this:
![Spreadsheet](https://github.com/epetenko/google-sheets-scraper/blob/master/Screen%20Shot%202017-10-25%20at%202.11.46%20PM.png)
The ImportXML function will scrape the url you choose and the xpath you choose. Set up that function in the first row after the header, in order to grab the exact thing you're trying to track. It works best when you're only scraping one HTML element, rather than say, an entire table. The second line is an example of what it looked like after I ran the JS script.

## Add the scraper code
Go to Tools - Script Editor and add the daily_scrape.js code:
```javascript
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
```
This will add the new scrape, with the date, to the next empty row whenever you run it. Don't forget to save.

## Set a regular time to run

In the script editor, click on the clock icon and set a time you want to run the function. I picked once a week.
It may ask you to verify the function with your Google account. 
