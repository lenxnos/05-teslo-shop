import NextLink from 'next/link';
import { Link, Chip, Grid, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ShopLayout } from '../../components/layouts/ShopLayout';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Nombre completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra información si está pagada la orden o no',
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return (
        params.row.paid
          ? <Chip color="success" label="Pagada" variant="outlined" />
          : <Chip color="error" label="No pagada" variant="outlined" />
      )
    }
  },
  {
    field: 'orden',
    headerName: 'Ver orden',
    width: 200,
    sortable: false,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline='always'>
            Ver orden
          </Link>
        </NextLink>
      )
    }
  }
]


const rows = [
  { id: 1, paid: true, fullname: 'John Doe' },
  { id: 2, paid: true, fullname: 'Jane Doe' },
  { id: 3, paid: true, fullname: 'Maria Robotnick' },
  { id: 4, paid: false, fullname: 'Carmen Cabrera' },
  { id: 5, paid: true, fullname: 'José Mujica' },
  { id: 6, paid: false, fullname: 'Carlos Gónzalez' },
  { id: 7, paid: false, fullname: 'Pierre Caam' },
]

const HistoryPage = () => {
  return (
    <ShopLayout title="Historial de ordenes" pageDescription='Historial de ordenes del cliente'>
      <Typography variant="h1" component="h1">Historial de ordenes</Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10, 20, 50]}
          />
        </Grid>
      </Grid>

    </ShopLayout>
  )
}

export default HistoryPage