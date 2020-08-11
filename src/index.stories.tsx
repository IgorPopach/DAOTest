import * as React from 'react'
import TestApp from './'

import { PriceOption } from './types'

const prices: PriceOption[] = [
  {
    id: '1',
    value: '500',
    type: 'г',
    price: 500,
    currency: 'грн'
  },
  {
    id: '2',
    value: '100',
    type: 'г',
    price: 150,
    currency: 'грн'
  },
  {
    id: '3',
    value: '50',
    type: 'г',
    price: 90,
    currency: 'грн'
  }
]


const Regular: React.FC = () => {
  const onSubmit = React.useCallback((total: PriceOption) => {
    console.log('onSubmit was handled with id', total)
  }, []);
  return (
    <TestApp {...{ prices, onSubmit }} />
  )
}

export { Regular }

export default {
  title: 'Common/TestApp',
}
