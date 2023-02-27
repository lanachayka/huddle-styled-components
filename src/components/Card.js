import React, { useContext } from 'react'
import { StyledCard } from './styled'
import { AppContext } from "../context/AppContext";

export default function Card({ item: { id, title, body, image } }) {
    const { colorTheme } = useContext(AppContext);
    return (
        <StyledCard layout={id % 2 === 0 && "row-reverse"} colorTheme={colorTheme}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={`./images/${image}`} alt={title} />
            </div>
        </StyledCard>
    )
}
