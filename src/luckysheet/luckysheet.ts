import ComponentRelay from '@standardnotes/component-relay';
import {AppDataField} from '@standardnotes/models';

declare const luckysheet;

let currentNote;
const componentRelay = new ComponentRelay({
  targetWindow: window,
  options: {
    coallesedSaving: true,
    coallesedSavingDelay: 400
  }
});

componentRelay.streamContextItem((note) => {
  if (currentNote) {
    luckysheet.destroy();
  }
  currentNote = note;
  // Only update UI on non-metadata updates.
  if (note.isMetadataUpdate) {
    return;
  }
  const text = note.content?.text || '';
  const isLocked = componentRelay.getItemAppDataValue(note, AppDataField.Locked);

  let data = null;
  if (text) {
    data = JSON.parse(text);
    if (isLocked) {
      data.forEach(sheet => {
        sheet.config = sheet.config || {};
        sheet.config.authority = {
          selectLockedCells: 0,
          selectunLockedCells: 0,
          formatCells: 0,
          formatColumns: 0,
          formatRows: 0,
          insertColumns: 0,
          insertRows: 0,
          insertHyperlinks: 0,
          deleteColumns: 0,
          deleteRows: 0,
          sort: 0,
          filter: 0,
          usePivotTablereports: 0,
          editObjects: 0,
          editScenarios: 0,
          sheet: 1,
          hintText: 'Note is locked'
        };
        // sheet['luckysheet_select_save'] = [{
        //   'row': [0, 22],
        //   'column': [0, 22]
        // }];
        // sheet['luckysheet_selection_range'] = [];

      });
    }
  }

  luckysheet.create({
    showinfobar: false,
    showstatisticBar: false,
    sheetFormulaBar: false,
    allowUpdate: false,
    container: 'luckysheet',
    row: 50,
    column: 25,
    showtoolbarConfig: {
      paintFormat: false,
      numberDecrease: false, //'Decrease the number of decimal places'
      numberIncrease: false, //'Increase the number of decimal places
      verticalAlignMode: false,
      textRotateMode: false, //'Text Rotation Mode'
      image: false, // 'Insert picture'
      link: false, // 'Insert link'
      chart: false, //'chart' (the icon is hidden, but if the chart plugin is configured, you can still create a new chart by right click)
      postil: false, //'comment'
      pivotTable: false, //'PivotTable'
      function: false, //'formula'
      frozenMode: false, //'freeze mode'
      sortAndFilter: false, //'Sort and filter'
      conditionalFormat: false, //'Conditional Format'
      dataVerification: false, // 'Data Verification'
      splitColumn: false, //'Split column'
      screenshot: false, //'screenshot'
      findAndReplace: false, //'Find and Replace'
      protection: false, // 'Worksheet protection'
      print: false, // 'Print'
    },
    cellRightClickConfig: {
      image: false,
      chart: false
    },
    data,
    hook: {
      updated: () => {
        componentRelay.saveItemWithPresave(currentNote, () => {
          currentNote.content.text = JSON.stringify(luckysheet.getAllSheets());
          currentNote.content.preview_plain = '';
        });
      }
    }
  });
});
