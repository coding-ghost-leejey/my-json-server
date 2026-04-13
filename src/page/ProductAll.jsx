import React, { useEffect, useState } from 'react' 
import ItemCard from '../components/ItemCard'
import { Container, Row,Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
    const [ itemList, setItemList] = useState([])
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        let searchQuery =  query.get('q') || '';
        console.log('query :', searchQuery)
        let SERVER = 'https://my-json-server.typicode.com/coding-ghost-leejey/my-json-server/'
        let url = `${SERVER}products?title:contains=${searchQuery}`;

        console.log('url :', url)
        let response = await fetch(url)
        let data = await response.json()
        setItemList(data)
    }

    useEffect( () => {
        // eslint-disable-next-line
        getProducts()
    },[query])
  return (
    <>
        <Container>
            <Row>
                  {itemList.map( item => (
                        <Col lg={3} key={item.id}><ItemCard item={item} /></Col> 
                  ))}
            </Row>
        </Container>
     
    </>
  )
}

export default ProductAll