import { CardStyle } from './Card.styles'
import type { CardType } from './Card.types'

const Card = ({ title, children }: CardType) => (
  <CardStyle>
    <h4>{title}</h4>
    <div>{children}</div>
  </CardStyle>
);

export default Card;
