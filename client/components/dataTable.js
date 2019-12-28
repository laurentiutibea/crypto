import React, {Component} from 'react';
import Table from "./table";

class DataTable extends Component {
	render() {
		const {data, onSort, sortColumn, columns } = this.props;
		return (
			<Table
				columns={columns}
				data={data}
				sortColumn={sortColumn}
				onSort={onSort}
			/>
		);
	}
}

export default DataTable;