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
import tableDataCheck from 'variables/progreso/tableDataCheck';
import tableDataComplex from 'variables/progreso/tableDataComplex';
import { BsPeople } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { IconBase } from 'react-icons';
import { IconContext } from 'react-icons/lib';
import Bannerr from 'components/admin/sanacion/Bannerr';

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
      <Widget
        icon={<MdAccountBalanceWallet className="h-6 w-6" />}
        title={'Tokens Touch'}
        subtitle={'2.433'}
        tooltipText={'Aquí se muestra el saldo total de tus tokens.'}
        showSendReceive={true}
      />
      <Widget
        icon={<MdDashboard className="h-6 w-6" />}
        title={'Certificados NFTs'}
        subtitle={'5'}
        tooltipText={'Número total de certificados obtenidos.'}
      />
      <Widget
        icon={<BsPeople className="h-7 w-7" />}
        title={'Individuales'}
        subtitle={'23'}
        tooltipText={'Número de sesiones individuales realizadas.'}
      />
      <Widget
        icon={<MdDashboard className="h-6 w-6" />}
        title={'Grupales'}
        subtitle={'8'}
        tooltipText={'Número de sesiones grupales conducidas.'}
      />
      <Widget
        icon={<MdDashboard className="h-6 w-6" />}
        title={'Donadas'}
        subtitle={'10'}
        tooltipText={'Número de sesiones donadas a la comunidad.'}
      />
      <Widget
        icon={<MdDashboard className="h-7 w-7" />}
        title={'Desafíos'}
        subtitle={'16'}
        tooltipText={'Número total de desafios realizadas.'}
        
      />

      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
        {/* NFt Banner */}
        <Bannerr />
        </div>
        {/* Tabla de desafios */}
        <div>
          <ComplexTable tableData={tableDataComplex} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
