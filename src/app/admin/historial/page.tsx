'use client';
import tableDataDevelopment from 'variables/historial/tableDataDevelopment';
import tableDataCheck from 'variables/historial/tableDataCheck';
import CheckTable from 'components/admin/historial/CheckTable';
import tableDataColumns from 'variables/historial/tableDataColumns';
import tableDataComplex from 'variables/historial/tableDataComplex';
import DevelopmentTable from 'components/admin/historial/DevelopmentTable';
import ColumnsTable from 'components/admin/historial/ColumnsTable';
import ComplexTable from 'components/admin/historial/ComplexTable';

const Tables = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ComplexTable tableData={tableDataComplex} />
        <DevelopmentTable tableData={tableDataDevelopment} />
        <CheckTable tableData={tableDataCheck} />
      </div>
    </div>
  );
};

export default Tables;
