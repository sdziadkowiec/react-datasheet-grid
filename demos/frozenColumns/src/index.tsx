import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// Import the actual DataSheetGrid component and column types from the main project
import { DataSheetGrid as DynamicDataSheetGrid } from '../../../src/components/DataSheetGrid';
import { textColumn } from '../../../src/columns/textColumn';
import { keyColumn } from '../../../src/columns/keyColumn';
import { intColumn } from '../../../src/columns/intColumn';
import { floatColumn } from '../../../src/columns/floatColumn';

// Import the required CSS styles
import '../../../src/style.css';

// Sample data for the demo
const sampleData = [
  { id: 1, name: 'Alice Johnson', dept: 'Engineering', salary: 85000, email: 'alice@company.com', phone: '555-0101', location: 'New York', startDate: '2020-01-15', manager: 'John Smith', status: 'Active', rating: 4.5, bonus: 5000 },
  { id: 2, name: 'Bob Smith', dept: 'Sales', salary: 75000, email: 'bob@company.com', phone: '555-0102', location: 'Chicago', startDate: '2019-03-22', manager: 'Sarah Wilson', status: 'Active', rating: 4.2, bonus: 3000 },
  { id: 3, name: 'Carol Davis', dept: 'Marketing', salary: 70000, email: 'carol@company.com', phone: '555-0103', location: 'Los Angeles', startDate: '2021-06-10', manager: 'Mike Johnson', status: 'Active', rating: 4.8, bonus: 4000 },
  { id: 4, name: 'David Wilson', dept: 'Engineering', salary: 90000, email: 'david@company.com', phone: '555-0104', location: 'Seattle', startDate: '2018-09-05', manager: 'John Smith', status: 'Active', rating: 4.6, bonus: 6000 },
  { id: 5, name: 'Eve Brown', dept: 'HR', salary: 65000, email: 'eve@company.com', phone: '555-0105', location: 'Boston', startDate: '2022-02-18', manager: 'Lisa Chen', status: 'Active', rating: 4.3, bonus: 2500 },
  { id: 6, name: 'Frank Miller', dept: 'Engineering', salary: 95000, email: 'frank@company.com', phone: '555-0106', location: 'San Francisco', startDate: '2017-11-12', manager: 'John Smith', status: 'Active', rating: 4.7, bonus: 7000 },
  { id: 7, name: 'Grace Lee', dept: 'Sales', salary: 72000, email: 'grace@company.com', phone: '555-0107', location: 'Miami', startDate: '2020-08-30', manager: 'Sarah Wilson', status: 'Active', rating: 4.1, bonus: 2800 },
  { id: 8, name: 'Henry Garcia', dept: 'Marketing', salary: 68000, email: 'henry@company.com', phone: '555-0108', location: 'Austin', startDate: '2021-01-25', manager: 'Mike Johnson', status: 'Active', rating: 4.4, bonus: 3200 },
  { id: 9, name: 'Ivy Chen', dept: 'Engineering', salary: 88000, email: 'ivy@company.com', phone: '555-0109', location: 'Portland', startDate: '2019-07-14', manager: 'John Smith', status: 'Active', rating: 4.9, bonus: 5500 },
  { id: 10, name: 'Jack Thompson', dept: 'Sales', salary: 76000, email: 'jack@company.com', phone: '555-0110', location: 'Denver', startDate: '2020-11-08', manager: 'Sarah Wilson', status: 'Active', rating: 4.0, bonus: 3100 },
];

// Define the columns for the DataSheetGrid
const columns = [
  { ...keyColumn('id', intColumn), title: 'ID', basis: 80, grow: 0, shrink: 0 },
  { ...keyColumn('name', textColumn), title: 'Name', basis: 150, grow: 1, shrink: 1 },
  { ...keyColumn('dept', textColumn), title: 'Department', basis: 120, grow: 1, shrink: 1 },
  { ...keyColumn('salary', intColumn), title: 'Salary', basis: 100, grow: 0, shrink: 0 },
  { ...keyColumn('email', textColumn), title: 'Email', basis: 200, grow: 1, shrink: 1 },
  { ...keyColumn('phone', textColumn), title: 'Phone', basis: 120, grow: 0, shrink: 0 },
  { ...keyColumn('location', textColumn), title: 'Location', basis: 120, grow: 1, shrink: 1 },
  { ...keyColumn('startDate', textColumn), title: 'Start Date', basis: 100, grow: 0, shrink: 0 },
  { ...keyColumn('manager', textColumn), title: 'Manager', basis: 130, grow: 1, shrink: 1 },
  { ...keyColumn('status', textColumn), title: 'Status', basis: 80, grow: 0, shrink: 0 },
  { ...keyColumn('rating', floatColumn), title: 'Rating', basis: 80, grow: 0, shrink: 0 },
  { ...keyColumn('bonus', intColumn), title: 'Bonus', basis: 100, grow: 0, shrink: 0 },
];

type EmployeeData = {
  id: number;
  name: string;
  dept: string;
  salary: number;
  email: string;
  phone: string;
  location: string;
  startDate: string;
  manager: string;
  status: string;
  rating: number;
  bonus: number;
};

function FrozenColumnsDemo() {
  const [data, setData] = useState<EmployeeData[]>(sampleData);
  const [frozenCount, setFrozenCount] = useState(2);
  
  return (
    <div className="container">
      <h1>Frozen Columns Demo</h1>
      <div className="demo-section">
        <div className="demo-title">Real DataSheetGrid with Frozen Columns</div>
        <div className="demo-description">
          This demo shows the actual DataSheetGrid component with frozen columns functionality. 
          The first {frozenCount} column(s) will remain fixed while others scroll horizontally.
          You can edit cells, add/remove rows, and use all the standard DataSheetGrid features.
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Number of frozen columns:</span>
            <select 
              value={frozenCount} 
              onChange={(e) => setFrozenCount(Number(e.target.value))}
              style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
            >
              <option value={0}>0 (No frozen columns)</option>
              <option value={1}>1 (ID column frozen)</option>
              <option value={2}>2 (ID + Name columns frozen)</option>
              <option value={3}>3 (ID + Name + Department frozen)</option>
              <option value={4}>4 (First 4 columns frozen)</option>
              <option value={5}>5 (First 5 columns frozen)</option>
            </select>
          </label>
        </div>

        <div style={{ 
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'white',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <DynamicDataSheetGrid
            value={data}
            onChange={(newData: any[]) => setData(newData as EmployeeData[])}
            columns={columns}
            frozenColumns={frozenCount}
            height={400}
            addRowsComponent={false}
            lockRows={false}
          />
        </div>

        <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
          <p><strong>Instructions:</strong></p>
          <ul>
            <li>Change the number of frozen columns using the dropdown above</li>
            <li>Scroll horizontally to see how frozen columns remain in place</li>
            <li>Click on any cell to edit it</li>
            <li>Right-click to access context menu options</li>
            <li>Use keyboard navigation (arrow keys, Tab, Enter)</li>
            <li>Select multiple cells by dragging or using Shift+Click</li>
          </ul>
        </div>
      </div>

      <div className="demo-section">
        <div className="demo-title">About Frozen Columns</div>
        <div className="demo-description">
          The frozen columns feature allows you to &quot;freeze&quot; the first N columns of a data grid, 
          keeping them visible while scrolling through the remaining columns. This is particularly 
          useful for large datasets where you want to keep important identifier columns (like ID, Name) 
          always visible while examining other data.
        </div>
        
        <div style={{ marginTop: '15px' }}>
          <h4>Key Features:</h4>
          <ul>
            <li><strong>Configurable count:</strong> Set any number of columns to be frozen</li>
            <li><strong>Sticky positioning:</strong> Frozen columns stay in place during horizontal scroll</li>
            <li><strong>Visual distinction:</strong> Frozen columns have a different background color</li>
            <li><strong>Seamless integration:</strong> Works with all existing DataSheetGrid features</li>
            <li><strong>Performance optimized:</strong> Uses virtualization for smooth scrolling</li>
          </ul>
        </div>

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '4px' }}>
          <strong>💡 Usage in DataSheetGrid:</strong>
          <pre style={{ margin: '10px 0', padding: '10px', backgroundColor: '#fff', borderRadius: '4px', overflow: 'auto' }}>
{`<DynamicDataSheetGrid
  value={data}
  onChange={setData}
  columns={columns}
  frozenColumns={2}  // Freeze first 2 columns
  height={400}
/>`}
          </pre>
        </div>

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '4px' }}>
          <strong>⚡ Performance Notes:</strong>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li>Frozen columns are rendered using sticky positioning</li>
            <li>Virtualization ensures smooth performance with large datasets</li>
            <li>Only visible rows and columns are rendered in the DOM</li>
            <li>Horizontal scrolling is optimized for frozen column behavior</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<FrozenColumnsDemo />); 