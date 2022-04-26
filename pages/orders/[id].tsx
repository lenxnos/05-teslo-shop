import { Link, Box, Card, CardContent, Divider, Grid, Typography, Chip } from '@mui/material';
import { NextPage } from 'next'
import NextLink from 'next/link';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { CardList, OrderSummary } from '../../components/cart';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

const OrderPage: NextPage = () => {
  return (
    <ShopLayout title="Resumen de orden 221212121" pageDescription="Resumen de la orden">
      <Typography variant="h1" component="h1">
        Orden: 1211
      </Typography>

      {/* <Chip
        sx={{ my: 2 }}
        label="Pendiente de pago"
        variant="outlined"
        color="error"
        icon={ <CreditCardOffOutlined /> }  
      /> */}

      <Chip
        sx={{ my: 2 }}
        label="Orden ya fue pagada"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CardList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen Orden (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  Dirección de entrega
                </Typography>
                <NextLink href="/checkout/address" passHref>
                  <Link underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography>Nelson Soto</Typography>
              <Typography>Calle 123</Typography>
              <Typography>Stittsville, HYA 26S</Typography>
              <Typography>Noruega</Typography>
              <Typography>+1 (123) 456-7890</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref>
                  <Link underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                {/*  */}
                <h1>Pagar</h1>

                <Chip
                  sx={{ my: 2 }}
                  label="Orden ya fue pagada"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default OrderPage