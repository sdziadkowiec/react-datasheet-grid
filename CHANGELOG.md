# Change Log

## 4.12.2
> Date: 2025-06-15
### Added
- "Copy with headers" option in context menu, which copies selected cells along with names of columns

## 4.12.1
> Date: 2025-06-15
### Added
- Dark mode styling in `style-dark.css`

## 4.12.0
> Date: 2025-06-15
### Added
- Support for React 19
- Updated dependencies

## 4.11.5
> Date: 2024-11-27
### Fix
- Copy from ISO date column
- Add prop `disableSmartDelete`

## 4.11.4
> Date: 2024-01-27
### Fix
- Triggering editing a cell just by typing now works with non-ASCII characters

## 4.11.3
> Date: 2024-01-18
### Fix
- Triggering editing a cell just by typing now works with non-ASCII characters
- Fix pasting from Excel for some edge cases
- Improve table behavior when scaling

## 4.11.2
> Date: 2023-07-26
### Fix
- Prevent submitting form when pressing `Enter` on a cell to edit it

## 4.11.0
> Date: 2023-05-16
### Add
- Add `onScroll` prop to allow infinite loaders and other fancy behaviors

## 4.10.3
> Date: 2023-02-15
### Fix
- Fix paste issue when editing

## 4.10.2
> Date: 2023-02-08
### Fix
- Fix paste issue when pasting was blocked on other inputs

## 4.10.0
> Date: 2023-01-20
### Added
- Clipboard actions (copy, cut, paste) are now available from context menu (right-click)

## 4.9.3
> Date: 2023-01-20
### Fix
- Better support for non-english characters

## 4.9.2
> Date: 2022-12-27
### Fix
- Date columns now support `YYYY.MM.DD` format and max year is 9999

## 4.9.1
> Date: 2022-12-19
### Fix
- Date columns now support `YYYY. MM. DD` and `YYYY/MM/DD` format

## 4.9.0
> Date: 2022-12-03
### Added
- Support for custom row height

## 4.8.1
> Date: 2022-11-23
### Fixed
- Duplicate characters issue when typing in Korean or other composable languages

## 4.8.0
> Date: 2022-11-18
### Added
- Added `isoDateColumn` to work with strings instead of Date objects
### Changed
- `isoDateColumn` and `dateColumn` now hide the calendar icon when not active for a better visual experience

## 4.7.0
> Date: 2022-11-06
### Added
- Now export `createAddRowsComponent`, `renderContextMenuItem`, and `createContextMenuComponent` for easier i18n
- Added `cellClassName` prop to DSG itself

## 4.6.0
> Date: 2022-11-04
### Changed
- `width` is now deprecated for columns, you should now use directly `basis`, `grow`, and `shrink`.
    Width computation is now done internally in JS and does not rely on the browser.
- Migrated from `react-window` to `react-virtual`. As a result columns are now virtualized as well.
### Added
- Support for `Ctrl`+`Left click` to open the context menu

## 4.5.0
> Date: 2022-09-28
### Added
- `headerRowHeight` now supports 0 as a value and completely hides the header row
- `checkboxColumn` now disables the checkbox when the cell itself is disabled
- `addRowsComponent` now supports `false` as a value to hide the component
- `cellClassName` now receives `columnId`

## 4.4.2
> Date: 2022-07-31
### Changed
- Transferred ownership of the repo

## 4.4.1
> Date: 2022-05-31
### Fixed
- Fix build, previous changes are now present

## 4.4.0
> Date: 2022-05-11
### Added
- Add `rowKey` prop to handle complex edge cases when inserting / deleting rows in the middle of the grid

## 4.3.0
> Date: 2022-05-03
### Added
- Add support for React 18

## 4.2.0
> Date: 2022-04-22
### Added
- Add support for `F2` key to start editing a cell, like in Excel
- The context menu component now has an extra prop `cursorIndex`, which is a `Cell`, 
  that holds the information about which cell was right-clicked on. `-1` means header or gutter column

## 4.1.1
> Date: 2022-02-23
### Changed
- Support more keys to start editing a cell

## 4.1.0
> Date: 2022-02-04
### Changed
- Improved scroll behavior when selecting a row or column 

## 4.0.6
> Date: 2022-02-01
### Fixed
- Remove dependency on `html-entities`
- Fixed style issues

## 4.0.5
> Date: 2022-01-29
### Fixed
- Prevent columns created with `createTextColumn` with `continuousUpdates` set to false
  to update when focus state flickers.

## 4.0.3
> Date: 2022-01-27
### Fixed
- `prePasteValues` was not called when expanding the selection

## 4.0.2
> Date: 2022-01-27
### Changed
- Changed module types to `commonjs` to improve compatibility

## 4.0.1
> Date: 2022-01-26
### Fixed
- `createTextColumn` placeholder was always displaying, it is now only displaying on active cells.
- `createTextColumn` was updating the row on first render when `continuousUpdates` was false.

## 4.0.0
> Date: 2022-01-26
### Changed
- CSS is no longer automatically imported and should be manually imported by the end user.
  This allows support for Nextjs and other frameworks.
- `data` prop is no longer supported in favor of `value`

## 3.6.3
> Date: 2022-01-17
### Fixed
- Endless re-renders with non-integer height
- Right and bottom shadow had false positive with non-integer sizes

## 3.6.2
> Date: 2022-01-13
### Fixed
- Flickering effect caused by scrollbars on non-integer pixel widths

## 3.6.0
> Date: 2021-12-30
### Added
- New column prop `prePasteValues`

## 3.5.0
> Date: 2021-12-26
### Added
- New prop `rowClassName`

## 3.4.0
> Date: 2021-12-23
### Added
- `onChange` now receives a second argument to track which rows were updated.

## 3.3.9
> Date: 2021-12-07
### Fixed
- Selection was overflowing when pasting a single row that overflows to the right
- A state could be updated (triggering a warning) after the component was unmounted
- Do not submit the form when adding a row

## 3.3.8
> Date: 2021-12-05
### Added
- CI and tests

## 3.3.7
> Date: 2021-11-23
### Added
- Now uses CSS custom properties to style DSG for easier customization.

## 3.3.6
> Date: 2021-11-20
### Added
- The `gutterColumn` prop now supports `false` to disable the gutter.
### Fixed
- Update context menu style to force text color to be black event when parent is white.

## 3.3.5
> Date: 2021-11-03
### Fixed
- Typo: ~~bellow~~ → below. For backward compatibility this does not affect the `type` of `ContextMenuItem`, it is still `INSERT_ROW_BELLOW`

## 3.3.4
> Date: 2021-11-02
### Fixed
- Pasting more columns than available caused a crash

## 3.3.3
> Date: 2021-10-13
### Added
- The package now exports `createTextColumn` that allows to create text-based columns from simple parsing and formatting functions.
  `floatColumn`, `intColumn`, `percentColumn`, and `textColumn` are now built using it.
- `floatColumn`, `intColumn`, and `percentColumn` now format the value when blurred using Intl

## 3.3.2
> Date: 2021-10-13
### Fixed
- `onBlur` was not passing the right cell to the callback

## 3.3.1
> Date: 2021-10-12
### Added
- Pressing Tab from the last cell of a row now moves the active
  cell to the first cell of the following row
- Pressing Shift+Tab from the first cell of a row now moves the active
  cell to the last cell of the previous row
- Draggable corner is now gray when the selection is disabled
- Draggable corner is hidden when all columns of the selection are disabled
### Fixed
- Fix typescript error in SelectionContext.ts
- Update tsconfig for better module compatibility

## 3.3.0
> Date: 2021-09-21
### Added
- User can now drag the corner of the selection to expand it.
### Fixed
- Headers width computation could be off in certain conditions because of the way flexbox computes 
  width when items have padding.

## 3.2.3
> Date: 2021-09-19
### Fixed
- Initial height computation made the grid jump 1 pixel

## 3.2.2
> Date: 2021-09-14
### Fixed
- Issues with SSR and DOMParser

## 3.2.0
> Date: 2021-09-14
### Added
- `activeCell` and `selection` of the ref now include `colId` if the column has an id.
- New props `onFocus`, `onBlur`, `onActiveCellChange`, and `onSelectionChange`
### Changed
- Prop `data` on `<DataSheetGrid/>` has been renamed `value` to match standards. `data` is still supported 
  but is now deprecated and support will be dropped on next major version.

## 3.1.2
> Date: 2021-09-07
### Improved
- Improved accessibility by allowing to focus next tabbable element in the dom when tabbing from the last cell, 
  and previous element when Shift+Tab from the first cell.

## 3.1.1
> Date: 2021-09-07
### Improved
- Improved copy / pasting by supporting text/html data type. Dealing with edge cases with special characters
  now works perfectly.

## 3.1.0
> Date: 2021-09-03
### Added
- Columns can now have an `id`, making `setActiveCell` and `setSelection` easier to use by specifying the column's `id` 
  instead of its index.

## 3.0.0
> Date: 2021-09-03
### Breaking changes
- Prop `isRowEmpty` on `<DataSheetGrid/>` has been deleted in favor of `isCellEmpty` on each column.

## 2.0.11
> Date: 2021-09-01 
### Added
- `disabled`, `deleteValue`, `copyValue`, `pasteValue`, `duplicateRow`, and `isRowEmpty` now have access to the `rowIndex`
- Columns can now specify `headerClassName` and `cellClassName`
- `<DataSheetGrid/>` now has `style` and `className` props

## Anterior versions
Changes were not track properly.
