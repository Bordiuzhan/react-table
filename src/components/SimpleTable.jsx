import {
  flexRender,
  useReactTable,
  getCoreRowModel,
} from '@tanstack/react-table';
import React from 'react';
import data from '../data.json';

const columns = [
  {
    header: 'ID',
    accessorKey: 'id',
    footer: 'ID footer',
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
  },
];

function SimpleTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((footer) => (
                <th key={footer.id}>
                  {flexRender(
                    footer.column.columnDef.footer,
                    footer.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}

export default SimpleTable;
