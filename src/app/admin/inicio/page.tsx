'use client';
import MiniCalendar from 'components/calendar/MiniCalendar';
import WeeklyRevenue from 'components/admin/default/WeeklyRevenue';
import TotalSpent from 'components/admin/default/TotalSpent';
import PieChartCard from 'components/admin/default/PieChartCard';
import { IoMdHome } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';
import { MdAccountBalance, MdAccountBalanceWallet, MdBalance, MdBarChart, MdCoPresent, MdDashboard, MdToken } from 'react-icons/md';

import Widget from 'components/widget/Widget';
import CheckTable from 'components/admin/default/CheckTable';
import ComplexTable from 'components/admin/default/ComplexTable';
import DailyTraffic from 'components/admin/default/DailyTraffic';
import TaskCard from 'components/admin/default/TaskCard';
import tableDataCheck from 'variables/historial/tableDataCheck';
import tableDataComplex from 'variables/historial/tableDataComplex';
import { BsPeople } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { IconBase } from 'react-icons';
import { IconContext } from 'react-icons/lib';
import Bannerr from 'components/admin/invertir/Bannerr';

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
      <Widget
        icon={<MdAccountBalanceWallet className="h-6 w-6" />}
        title={'Balance PXO Token'}
        subtitle={'23.433.000'}
        tooltipText={'Stablecoin 1:1 con el peso mexicano. Ver contrato'}
        showSendReceive={true}
      />
     <Widget
        icon={<MdDashboard className="h-6 w-6" />}
        title={'Invertido'}
        subtitle={'1.000.000'}
        tooltipText={'Número de sesiones donadas a la comunidad.'}
      />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
        {/* NFt Banner */}
        <ComplexTable tableData={tableDataComplex} />
        </div>
        {/* Tabla de desafios */}
        <div>
        <Bannerr />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
