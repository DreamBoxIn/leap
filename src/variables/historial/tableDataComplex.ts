type RowObj = {
  name: string;
  status: string;
  date: string;
  progress: number;
};

const tableDataComplex: RowObj[] = [
  {
    name: 'Nivel 1',
    progress: 75.5,
    status: 'Approved',
    date: '11 Jan 2021',
  },
  {
    name: '+20 sesiones donadas',
    progress: 25.5,
    status: 'Disable',
    date: '21 Feb 2021',
  },
  {
    name: 'Weekly Update',
    progress: 90,
    status: 'Error',
    date: '13 Mar 2021',
  },
  {
    name: 'Marketplace',
    progress: 50.5,
    status: 'Approved',
    date: '24 Oct 2022',
  },
];
export default tableDataComplex;
