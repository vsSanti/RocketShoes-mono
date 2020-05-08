import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 10px;
  margin: 15px;
  background: #fff;
  border-radius: 4px;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;

export const TotalText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const TotalAmount = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 5px;
`;

export const Order = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 13px 0;
  border-radius: 4px;
`;

export const OrderText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 5px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity``;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background: #eee;
  border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity`
  /* margin: 10px 0; */
`;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const ProductSubtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  flex: 1;
  text-align: right;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  padding: 10px;
`;

export const EmptyText = styled.Text`
  padding: 10px;
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
`;
