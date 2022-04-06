import {
    Container,
    Title,
    U1
} from './StyledAnimation';
import cityData from '../data/cityData';

const Animation = () => {
    return (
        <Container>
            <Title>Top U.S. Spring Break beach destinations</Title>
            <U1>
                {cityData.map((p, i) => {
                    return (
                        <li key={i}>
                            <span>{p.name}</span>
                            <div>
                                <img src={p.img} alt={p.name} />
                            </div>
                        </li>
                    )
                })},
            </U1>

            <div className="cursor"></div>
        </Container>
    )
}

export default Animation;