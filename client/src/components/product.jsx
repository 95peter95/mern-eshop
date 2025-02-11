import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap';
import Rating from "./rating";

const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong style={{ textDecoration: 'none' }}>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='p'>
                    <Card.Text as='div'>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                    </Card.Text>
                    {product.price}€
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
