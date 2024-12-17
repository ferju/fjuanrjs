import Card from 'react-bootstrap/Card';

import ItemCount from './ItemCount'

function ItemDetail ({ detail }){
return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={detail?.images} />
      <Card.Body>
        <Card.Title>{detail?.title}</Card.Title>
        <Card.Text>
          {detail?.description}
        </Card.Text>
      </Card.Body>
      <ItemCount detail={detail} />
    </Card>
)


}

export default ItemDetail