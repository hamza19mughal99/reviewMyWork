import React from "react";
import MUIDataTable from "mui-datatables";
import "./MuiDataTables.css";

const MuiDataTable = ({ data, columns, title, setPage, page, rowsPerPage = 5, setRowsPerPage, count, setText, text }) => {
    const option = {
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
        serverSide: true,
        sort: false,
        jumpToPage: false,
        searchText: text,
        exportOptions: {
            columns: [2, 3, 4, 5],
        },
    };
    return (
        <div className="mui_datatables">
            <MUIDataTable
                title={title}
                data={data}
                columns={columns}
                options={option}
            />
        </div>
    );
};
export default MuiDataTable;