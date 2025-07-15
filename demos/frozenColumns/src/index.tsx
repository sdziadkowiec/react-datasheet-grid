import React from 'react';
import { createRoot } from 'react-dom/client';

// Create a minimal sample of frozen columns functionality
const sampleData = [
  { id: 1, name: 'Alice Johnson', dept: 'Engineering', salary: 85000, email: 'alice@company.com', phone: '555-0101', location: 'New York', startDate: '2020-01-15', manager: 'John Smith', status: 'Active', rating: 4.5, bonus: 5000 },
  { id: 2, name: 'Bob Smith', dept: 'Sales', salary: 75000, email: 'bob@company.com', phone: '555-0102', location: 'Chicago', startDate: '2019-03-22', manager: 'Sarah Wilson', status: 'Active', rating: 4.2, bonus: 3000 },
  { id: 3, name: 'Carol Davis', dept: 'Marketing', salary: 70000, email: 'carol@company.com', phone: '555-0103', location: 'Los Angeles', startDate: '2021-06-10', manager: 'Mike Johnson', status: 'Active', rating: 4.8, bonus: 4000 },
  { id: 4, name: 'David Wilson', dept: 'Engineering', salary: 90000, email: 'david@company.com', phone: '555-0104', location: 'Seattle', startDate: '2018-09-05', manager: 'John Smith', status: 'Active', rating: 4.6, bonus: 6000 },
  { id: 5, name: 'Eve Brown', dept: 'HR', salary: 65000, email: 'eve@company.com', phone: '555-0105', location: 'Boston', startDate: '2022-02-18', manager: 'Lisa Chen', status: 'Active', rating: 4.3, bonus: 2500 },
  { id: 6, name: 'Frank Miller', dept: 'Engineering', salary: 95000, email: 'frank@company.com', phone: '555-0106', location: 'San Francisco', startDate: '2017-11-12', manager: 'John Smith', status: 'Active', rating: 4.7, bonus: 7000 },
  { id: 7, name: 'Grace Lee', dept: 'Sales', salary: 72000, email: 'grace@company.com', phone: '555-0107', location: 'Miami', startDate: '2020-08-30', manager: 'Sarah Wilson', status: 'Active', rating: 4.1, bonus: 2800 },
  { id: 8, name: 'Henry Garcia', dept: 'Marketing', salary: 68000, email: 'henry@company.com', phone: '555-0108', location: 'Austin', startDate: '2021-01-25', manager: 'Mike Johnson', status: 'Active', rating: 4.4, bonus: 3200 },
];

// Simple table component to demonstrate frozen columns concept
function FrozenColumnsDemo() {
  const [frozenCount, setFrozenCount] = React.useState(1);
  
  const headers = ['ID', 'Name', 'Department', 'Salary', 'Email', 'Phone', 'Location', 'Start Date', 'Manager', 'Status', 'Rating', 'Bonus'];
  const getRowData = (item: typeof sampleData[0]) => [
    item.id,
    item.name,
    item.dept,
    `$${item.salary.toLocaleString()}`,
    item.email,
    item.phone,
    item.location,
    item.startDate,
    item.manager,
    item.status,
    item.rating,
    `$${item.bonus.toLocaleString()}`
  ];

  return (
    <div className="container">
      <h1>Frozen Columns Demo</h1>
      <div className="demo-section">
        <div className="demo-title">Frozen Columns Demonstration</div>
        <div className="demo-description">
          This demo shows how frozen columns work. The first {frozenCount} column(s) will remain fixed while others scroll horizontally.
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label>
            Number of frozen columns: 
            <select value={frozenCount} onChange={(e) => setFrozenCount(Number(e.target.value))}>
              <option value={0}>0 (No frozen columns)</option>
              <option value={1}>1 (ID column frozen)</option>
              <option value={2}>2 (ID + Name columns frozen)</option>
              <option value={3}>3 (ID + Name + Department frozen)</option>
              <option value={4}>4 (ID + Name + Department + Salary frozen)</option>
              <option value={5}>5 (First 5 columns frozen)</option>
            </select>
          </label>
        </div>

        <div style={{ 
          overflowX: 'auto', 
          border: '1px solid #ddd',
          borderRadius: '4px',
          background: 'white'
        }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            minWidth: '1440px'
          }}>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={header} style={{
                    padding: '12px',
                    textAlign: 'left',
                    borderBottom: '2px solid #ddd',
                    backgroundColor: index < frozenCount ? '#f8f9fa' : '#fff',
                    fontWeight: 'bold',
                    position: index < frozenCount ? 'sticky' : 'static',
                    left: index < frozenCount ? `${index * 120}px` : 'auto',
                    zIndex: index < frozenCount ? 10 : 1,
                    borderRight: index < frozenCount ? '1px solid #ddd' : 'none',
                    minWidth: '120px'
                  }}>
                    {header}
                    {index < frozenCount && ' 📌'}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sampleData.map((item, rowIndex) => (
                <tr key={item.id}>
                  {getRowData(item).map((cellData, cellIndex) => (
                    <td key={cellIndex} style={{
                      padding: '12px',
                      borderBottom: '1px solid #eee',
                      backgroundColor: cellIndex < frozenCount ? '#f8f9fa' : '#fff',
                      position: cellIndex < frozenCount ? 'sticky' : 'static',
                      left: cellIndex < frozenCount ? `${cellIndex * 120}px` : 'auto',
                      zIndex: cellIndex < frozenCount ? 10 : 1,
                      borderRight: cellIndex < frozenCount ? '1px solid #ddd' : 'none',
                      minWidth: '120px'
                    }}>
                      {cellData}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
          <p><strong>Instructions:</strong></p>
          <ul>
            <li>Change the number of frozen columns using the dropdown above</li>
            <li>Scroll horizontally to see how frozen columns remain in place</li>
            <li>Frozen columns are marked with a 📌 pin icon</li>
            <li>This demonstrates the concept that will be implemented in the DataSheetGrid component</li>
          </ul>
        </div>
      </div>

      <div className="demo-section">
        <div className="demo-title">About Frozen Columns</div>
        <div className="demo-description">
          The frozen columns feature allows you to "freeze" the first N columns of a data grid, 
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
          </ul>
        </div>

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '4px' }}>
          <strong>💡 Usage in DataSheetGrid:</strong>
          <pre style={{ margin: '10px 0', padding: '10px', backgroundColor: '#fff', borderRadius: '4px' }}>
{`<DataSheetGrid
  value={data}
  columns={columns}
  frozenColumns={2}  // Freeze first 2 columns
  height={400}
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<FrozenColumnsDemo />); 