import { NextPage } from 'next';
import NextLink from 'next/link';
import { Box, Typography, Link } from '@mui/material';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { ShopLayout } from '../../components/layouts/ShopLayout';

const EmptyPage: NextPage = () => {
  return (
    <ShopLayout title='Carrito vació' pageDescription='No hay artículos en el carrito de compra'>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>
            Su carrito esta vació
          </Typography>
          <NextLink href="/" passHref>
            <Link typography="h4" color="secondary">
              Regresar 
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  )
}

export default EmptyPage