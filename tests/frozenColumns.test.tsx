import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { DataSheetGrid, textColumn, keyColumn, DataSheetGridRef } from '../src'
import { DataWrapper } from './helpers/DataWrapper'
jest.mock('react-resize-detector', () => ({
  useResizeDetector: () => ({ width: 500, height: 70 }),
}))

const columns = [
  keyColumn('col1', textColumn),
  keyColumn('col2', textColumn),
  keyColumn('col3', textColumn),
]

test('Frozen columns have sticky left class', async () => {
  jest.useFakeTimers()
  const dataRef = { current: [{ col1: 'a', col2: 'b', col3: 'c' }] }
  const dsgRef = { current: null as unknown as DataSheetGridRef }
  const { findByText } = render(
    <DataWrapper dataRef={dataRef} dsgRef={dsgRef} columns={columns} frozenColumns={1} />
  )
  jest.runAllTimers()
  const col1Cell = (await findByText('a')).parentElement
  expect(col1Cell).toHaveClass('dsg-cell-sticky-left')
  const col2Cell = (await findByText('b')).parentElement
  expect(col2Cell).not.toHaveClass('dsg-cell-sticky-left')
  jest.useRealTimers()
})

test('Frozen columns with frozenColumns=2', async () => {
  jest.useFakeTimers()
  const dataRef = { current: [{ col1: 'a', col2: 'b', col3: 'c' }] }
  const dsgRef = { current: null as unknown as DataSheetGridRef }
  const { findByText } = render(
    <DataWrapper dataRef={dataRef} dsgRef={dsgRef} columns={columns} frozenColumns={2} />
  )
  jest.runAllTimers()
  const col1Cell = (await findByText('a')).parentElement
  expect(col1Cell).toHaveClass('dsg-cell-sticky-left')
  const col2Cell = (await findByText('b')).parentElement
  expect(col2Cell).toHaveClass('dsg-cell-sticky-left')
  const col3Cell = (await findByText('c')).parentElement
  expect(col3Cell).not.toHaveClass('dsg-cell-sticky-left')
  jest.useRealTimers()
}) 