import React from 'react'
import styled from 'styled-components'
import { useTable , useResizeColumns, useBlockLayout} from 'react-table'


const Styles = styled.div`
  padding: 1rem;

  

  table {
    width: 100%;
    display: inline-block;
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        .td {
          border-bottom: 0;
          
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;


      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;

      :last-child {
        border-right: 0;
      }

      ${'' /* The resizer styles! */}

      .resizer {
        display: inline-block;
        // background: blue;
        width: 5px;
        overflow: hidden
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;

        &.isResizing {
          background: red;
        }
      }
    }
  }
`
function Table ({columns, data}) {
    const defaultColumn = React.useMemo(
        () => ({
          minWidth: 100,
          width: 150,
          maxWidth: 500,
        }),
        []
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable(
        {
          columns,
          data,
          defaultColumn,
        },
        useBlockLayout,
        useResizeColumns
      )

  // Render the UI for your table
  return (
    <Styles>
    <table className="table table-striped" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} >
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                 <div
                  {...column.getResizerProps()}
                  className={`resizer ${column.isResizing ? 'isResizing' : ''}`}
                />
                {column.render('Header') }
                </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(
          (row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )}
        )}
      </tbody>
    </table>
    </Styles>
  )
}

export default Table;