import React from 'react'
import { useTable , useResizeColumns, useBlockLayout} from 'react-table'


function Table ({columns, data}) {
	const defaultColumn = React.useMemo(
		() => ({
			minWidth: 100,
			width: 350, // use use effect to get window width
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
		<>
			<div className="table-responsive tableWrap">

				<table className=" table-striped" {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup, headerIndex) => (
							<tr key={headerIndex} {...headerGroup.getHeaderGroupProps()} >
								{headerGroup.headers.map((column, colIndex) => (
									<th key={colIndex} {...column.getHeaderProps()}>
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
							(row, index) => {
								prepareRow(row);
								return (
									<tr key={index} {...row.getRowProps()}>
										{row.cells.map((cell, cellIndex) => {
											return <td  key={cellIndex} {...cell.getCellProps()}>{cell.render('Cell')}</td>
										})}
									</tr>
								)}
						)}
					</tbody>
				</table>
			</div>
			<style jsx>{`

      .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid black;
  }

  table{
    width: 1000px;
  }





  th{
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    position: sticky;
    top: 0px;
    background: white;

  
  }
  

  td {
    padding: 25px;
    text-align: left;
    vertical-align:middle;
    font-weight: 300;
    font-size: 12px;
    border-bottom: solid 1px rgba(0,0,0,0.1);
    min-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
  }



  tr:hover {
    background: #f5f5f5;
  }

  .resizer {
        display: inline-block;
        width: 20px;
        overflow: hidden;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;

  }
        .isResizing {
          background: green;
        }
      
  
                      
                    `}</style>

		</>
      
	)
}

export default Table;