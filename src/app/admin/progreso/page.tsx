'use client';
import tableDataDevelopment from 'variables/progreso/tableDataDevelopment';
import tableDataCheck from 'variables/progreso/tableDataCheck';
import CheckTable from 'components/admin/progreso/CheckTable';
import tableDataColumns from 'variables/progreso/tableDataColumns';
import tableDataComplex from 'variables/progreso/tableDataComplex';
import DevelopmentTable from 'components/admin/progreso/DevelopmentTable';
import ColumnsTable from 'components/admin/progreso/ColumnsTable';
import ComplexTable from 'components/admin/progreso/ComplexTable';

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
