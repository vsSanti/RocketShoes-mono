import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import colors from '../../styles/colors';
import { formatPrice } from '../../util/format';

import {
  Container,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function renderItem(item) {
    return (
      <Product key={item.id}>
        <ProductInfo>
          <ProductImage source={{ uri: item.image }} />
          <ProductDetails>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
          </ProductDetails>
          <ProductDelete onPress={() => removeFromCart(item.id)}>
            <Icon name="delete-forever" size={24} color={colors.primary} />
          </ProductDelete>
        </ProductInfo>
        <ProductControls>
          <ProductControlButton
            onPress={() => updateAmountRequest(item.id, item.amount - 1)}
          >
            <Icon
              name="remove-circle-outline"
              size={20}
              color={colors.primary}
            />
          </ProductControlButton>
          <ProductAmount value={String(item.amount)} />
          <ProductControlButton
            onPress={() => updateAmountRequest(item.id, item.amount + 1)}
          >
            <Icon name="add-circle-outline" size={20} color={colors.primary} />
          </ProductControlButton>
          <ProductSubtotal>{item.subtotal}</ProductSubtotal>
        </ProductControls>
      </Product>
    );
  }

  return (
    <Container>
      {cart.length ? (
        <>
          {cart.map(item => renderItem(item))}
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>{total}</TotalAmount>
            <Order>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </Order>
          </TotalContainer>
        </>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
