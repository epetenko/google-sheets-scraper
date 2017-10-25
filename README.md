# google-sheets-scraper
Scrape a website on a regular basis and add as a row on Google Sheets
## Set up your spreadsheet
This function is designed to run on a sheet that looks like this:
[Spreadsheet](Screen Shot 2017-10-25 at 2.11.46 PM.png)
The ImportXML function will scrape the url you choose and the xpath you choose. Set up that function in the first row after the header, in order to grab the exact thing you're trying to track. It works best when you're only scraping one HTML element, rather than say, an entire table.

## Add the scraper code
