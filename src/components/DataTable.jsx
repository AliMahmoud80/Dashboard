import { memo } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  table: {
    border: "none",
    "& .MuiDataGrid-cell": {
      borderBottom: "1px solid #eee",
    },
    "& .MuiDataGrid-columnsContainer": {
      background: "#FAFAFA",
    },
    "& .MuiDataGrid-colCellCheckbox": {
      padding: "20px",
    },
  },
  tableFooter: {
    padding: "16px 8px",
  },
  pagination: {
    "& .MuiPaginationItem-outlined": {
      border: "1px solid #D9D9D9",
      borderRadius: "4px",
    },
    "& .Mui-selected": {
      color: "#1890FF",
      borderColor: "#1890FF",
      backgroundColor: "#fff",
    },
  },
}));

const DataTable = ({
  rows,
  columns,
  currentPage,
  changeCurrentPage,
  pageSize,
  changePageSize,
  showFooter,
}) => {
  const classes = useStyle();

  return (
    <Grid container>
      <Grid item xs={12}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          checkboxSelection
          autoHeight
          hideFooter
          disableSelectionOnClick
          classes={{
            root: classes.table,
            columnHeader: classes.tableHeader,
          }}
          components={{
            ColumnMenuIcon: () => <></>,
            ColumnSortedAscendingIcon: () => <></>,
            ColumnSortedDescendingIcon: () => <></>,
          }}
          onPageSizeChange={() => console.log("wtf")}
        />
      </Grid>
      {/* Table Footer */}
      {showFooter && (
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          className={classes.tableFooter}
        >
          <Grid item>
            <Pagination
              classes={{
                ul: classes.pagination,
              }}
              page={currentPage}
              count={50}
              variant="outlined"
              shape="rounded"
              boundaryCount={1}
              siblingCount={2}
              onChange={(_, page) => changeCurrentPage(page)}
            />
          </Grid>
          <Grid item>
            <span style={{ marginRight: "8px", fontSize: "14px" }}>Show:</span>
            <Select
              id="perPage"
              variant="outlined"
              value={pageSize}
              style={{ height: "35px", fontSize: "14px" }}
              onChange={(e) => changePageSize(e.target.value)}
              MenuProps={{
                classes: { paper: "custom-selectMenu" },
                anchorOrigin: { vertical: "bottom", horizontal: "center" },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "center",
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value={2}>2 per pagae</MenuItem>
              <MenuItem value={10}>10 per pagae</MenuItem>
              <MenuItem value={20}>20 per page</MenuItem>
              <MenuItem value={30}>30 per page</MenuItem>
            </Select>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default memo(DataTable);
