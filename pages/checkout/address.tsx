import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../../components/layouts/ShopLayout';

const AddressPage = () => {
  return (
    <ShopLayout title="Dirección" pageDescription="Confirmar dirección del destino">
      <Typography variant="h1" component="h1">Dirección</Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant='filled'
            label='Nombre'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant='filled'
            label='Apellido'
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant='filled'
            label='Direción'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant='filled'
            label='Direccion 2 (opcional)'
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant='filled'
            label='Código Postal'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant='filled'
            label='Ciudad'
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select
              variant="filled"
              label="País"
              value={1}
            >
              <MenuItem value={1}>
                Costa Rica
              </MenuItem>
              <MenuItem value={2}>
                Honduras
              </MenuItem>
              <MenuItem value={3}>
                El Salvador
              </MenuItem>
              <MenuItem value={4}>
                México
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant='filled'
            label='Teléfono'
            fullWidth
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
        <Button color="secondary" className='circular-btn' size="large">
          Revisar pedido
        </Button>
      </Box>
    </ShopLayout>
  )
}

export default AddressPage