import { FC, ReactElement, useState } from "react";

import { CardProps } from "../../interfaces/props/card";
import Input from "../Input/Input";

import './style.scss';

const Card: FC<CardProps> = (props: CardProps): ReactElement => {
    const {
        description,
        image,
        title,
        onChange = () => { },
        onClick = () => { },
        onDetailClick = () => { },
    } = props;

    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value ? setIsButtonDisabled(false) : setIsButtonDisabled(true)
        event.target.value && onChange(event.target.value);
    }

    return (

        <div className="card" >
            <img src={image} alt='img' />
            <h1>{title}</h1>
            <p>{description}</p> 
            <Input onChange={onInputChange} />
            <br />
            <button onClick={onDetailClick}>Details</button >
            <button disabled={isButtonDisabled} onClick={onClick}>Submit</button>
        </div >

    );
};

export default Card;