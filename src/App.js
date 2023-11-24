import React from 'react';
import data from './data.json';
import SimpleTable from './components/SimpleTable';
import dayjs from 'dayjs';

const columns = [
  {
    header: 'ID',
    accessorKey: 'id',
    footer: 'ID footer',
  },
  {
    header: 'Name  and Last Name',
    accessorFn: (row) => `${row.name} ${row.lastName}`,
  },
  {
    header: 'Name',
    accessorKey: 'name',
    footer: 'Name footer',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
    footer: 'Last Name footer',
  },
  {
    header: 'Email',
    accessorKey: 'email',
    footer: 'Email footer',
  },
  {
    header: 'Country',
    accessorKey: 'country',
    footer: 'Country footer',
  },
  {
    header: 'Date of birth',
    accessorKey: 'dateOfBirth',
    footer: 'Date of birth footer',
    cell: (info) => dayjs(info.getValue()).format('DD/MM/YYYY'),
  },
];

function App() {
  return <SimpleTable data={data} columns={columns} />;
}

export default App;
