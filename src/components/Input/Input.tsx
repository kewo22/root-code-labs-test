import { FC, ReactElement } from "react";

import { InputProps } from "../../interfaces/props/input";

import './style.scss';

const Input: FC<InputProps> = (props: InputProps): ReactElement => {

    const { onChange } = props;

    return (
        <>
            <input type="number" min={0} placeholder="Amount" onChange={onChange} /> LKR
        </>
    );
};

export default Input;


