import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import "./MuiDataTables.css";

const MuiDataTable = ({ data, columns, title, page, rowsPerPage = 5, count, text }) => {
    const [sortedData, setSortedData] = useState(data);
    const [sortInfo, setSortInfo] = useState({});

    useEffect(() => {
        if (sortInfo.column) {
            const { column, direction } = sortInfo;
            const sorted = [...data].sort((a, b) => {
                const valueA = a.data[column];
                const valueB = b.data[column];

                if (direction === "asc") {
                    return valueA.localeCompare(valueB, undefined, { numeric: true, sensitivity: 'base' });
                } else {
                    return valueB.localeCompare(valueA, undefined, { numeric: true, sensitivity: 'base' });
                }
            });

            setSortedData(sorted);
        } else {
            setSortedData(data);
        }
    }, [data, sortInfo]);

    const options = {
        filter: false,
        filterType: "checkbox",
        search: false,
        viewColumns: false,
        download: false,
        print: false,
        responsive: "standard",
        selectableRows: "none",
        rowsPerPageOptions: [5, 10, 20],
        rowsPerPage,
        page,
        count,
        serverSide: false,
        sort: true,
        jumpToPage: false,
        searchText: text,
        onTableChange: (action, tableState) => {
            if (action === "sort") {
                const { sortColumn: column, sortDirection: direction } = tableState;
                setSortInfo({ column, direction });
            }
        },
        exportOptions: {
            columns: [2, 3, 4, 5],
        },
    };


    return (
        <div className="mui_datatables">
            <MUIDataTable
                title={title}
                data={sortedData}
                columns={columns}
                options={options}
            />
        </div>
    );
};
export default MuiDataTable;