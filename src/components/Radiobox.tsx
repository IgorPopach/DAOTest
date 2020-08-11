import * as React from 'react'

import styled from 'styled-components'
import { PriceOption } from '../types'
import Colors from '../constants/Colors'

interface Props {
    option: PriceOption
    isChecked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-left: 35px;
    font-size: 16px;
    line-height: 19px;
    color: ${({ color }) => color};
    margin-bottom: 17px;

    > label {
        cursor: pointer;
    }

    > span.bold {
        font-weight: bold
    }

    > label input {
        position: absolute;
        opacity: 0;
        cursor: pointer;

        &:checked ~ .checkmark:after {
            display: block;
        }
    }

    .checkmark {
        position: absolute;
        top: -2px;
        left: 0;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        border: 1px solid ${Colors.accent}

        
    }
    .checkmark:after {
            content: "";
            position: absolute;
            display: none;
            top: 7px;
            left: 7px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${Colors.accent};
        }
`

const Radiobox = ({ option, isChecked, onChange }: Props) => {
    return (
        <StyledRow
            color={isChecked ? Colors.primary : Colors.secondary}
        >
            <label>
                <input
                    type="radio"
                    value={option.value}
                    checked={isChecked}
                    onChange={onChange}
                />
                <span className="checkmark"></span>
                {option.value} {option.type}
            </label>
            <span className={isChecked ? 'bold' : ''}>{option.price} {option.currency}</span>
        </StyledRow>
    )
}

export default Radiobox