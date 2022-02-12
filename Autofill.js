const sheet_ID = "1zNrOZZbHIrO6L15ntStoBkBHfkAe01lpP3rGXwRFBp0";
const form_ID = "1avhXYR_BprUM3tg-Jy5IEVzQZfjBar-Jqezbxkc4dh8";
const data = SpreadsheetApp.openById(sheet_ID).getSheetByName("Sheet1");
const form = FormApp.openById(form_ID);
function main(){
              const startRowIndex = 1 
              const startColumnIndex = 1
              const amountOfRowsToUse = 1
             const lastColumn = data.getLastColumn()
       const labels = const labels = data.getRange(startRowIndex, startColumnIndex, amountOfRowsToUse, lastColumn).getValues()[0];
      
const startColumnIndex = 2
const lastRowIndex = data.getLastRow()-1
const lastColumnIndex = 1
labels.forEach((label, i) => {
  const startRowIndex = i +1
  const options = data.getRange(startColumnIndex, startRowIndex, lastRowIndex, lastColumnIndex).getValues()
  updateDropdownTitle(label,options)
})
