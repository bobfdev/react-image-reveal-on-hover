import { useEffect, useState } from 'react';
import {
    Container,
    Title,
    U1
} from './StyledAnimation';
import cityData from '../data/cityData';
import { cleanup } from '@testing-library/react';

const Animation = () => {
    const [position, setPosition] = useState({
        x: "",
        y: "",
    });

    const handleMouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        });

    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.addEventListener('mousemove', handleMouseMove);
        }
    }, [])


    return (
        <Container>
            <Title>Top U.S. Spring Break beach destinations</Title>
            <U1>
                {cityData.map((p, i) => {
                    return (
                        <li key={i}>
                            <span>{p.name}</span>
                            <div className="img-cont">
                                <img src={p.img} alt={p.name} />
                            </div>
                        </li>
                    )
                })},
            </U1>

            <div 
                className="cursor" 
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            >
                
            </div>
        </Container>
    )
}

export default Animation;