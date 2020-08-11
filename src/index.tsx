import * as React from 'react'
import styled from 'styled-components'

import { PriceOption } from './types'
import Radiobox from './components/Radiobox'
import Colors from './constants/Colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

interface Props {
  prices: PriceOption[];
  onSubmit: (totalPrice: PriceOption) => void;
}

const Card = styled.div`
  min-width: 210px;
  max-width: 500px;
  text-align: center;
  padding: 24px;
  background: ${Colors.white};
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px; 
`

const CardList = styled.div`
  margin-bottom: 34px;
`

const ListHeader = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 21px;
  margin-top: 0;
  color: ${Colors.primary}
`

const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  > span {
    font-size: 24px;
  }

  @media(max-width: 315px) {
    flex-direction: column;

    > span {
      margin-bottom: 15px;
    }
  }
`

const Button = styled.button`
  background-color: ${Colors.accent};
  color: ${Colors.white};
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;

  > svg {
    font-size: 24px;
    margin: 14px 6px 14px 0;
  }
`

const TestApp = ({ prices, onSubmit }: Props) => {
  const [checkedValue, setCheckedValue] = React.useState('')
  const [totalPrice, setPrice] = React.useState({} as PriceOption)
  const [disabledButton, setDisabledButton] = React.useState(true);

  const onChangeHandler = React.useCallback(({ target }) => {
    setCheckedValue(target.value)
    const currentPrice = prices.find(price => price.value === target.value)
    if (currentPrice) {
      setPrice(currentPrice)
    }
  }, []);

  const onClickHandler = React.useCallback(() => {
    onSubmit(totalPrice)
  }, [totalPrice]);

  React.useEffect(() => {
    if (prices.length === 0) {
      setDisabledButton(true)
    }
    setCheckedValue(prices[0].value)
    setPrice(prices[0])
    setDisabledButton(false)
  }, [prices]);

  if (prices.length === 0) {
    return <Card>
      There is no options for choose
    </Card>
  }
  return (
    <Card>
      <CardList>
        <ListHeader>
          <span>Тип</span><span>Ціна</span>
        </ListHeader>
        {prices.map(el =>
          <Radiobox key={el.id} option={el} isChecked={el.value === checkedValue} onChange={onChangeHandler} />
        )}
      </CardList>
      <SubmitContainer>
        <span>{totalPrice.price} {totalPrice.currency}</span>
        <Button onClick={onClickHandler} disabled={disabledButton}><FontAwesomeIcon icon={faShoppingCart} />До кошика</Button>
      </SubmitContainer>
    </Card>
  )
}

export default TestApp
