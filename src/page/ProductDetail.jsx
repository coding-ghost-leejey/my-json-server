import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    let {id} = useParams()
    const [item, setItem] = useState(null)
   
  const getProductDetail = async () => {
    let SERVER = 'https://my-json-server.typicode.com/coding-ghost-leejey/my-json-server/'
    let url = `${SERVER}products/${id}`
    let response = await fetch(url);
    let data = await response.json() 
    setItem(data)
  }

  useEffect( () => {
    getProductDetail()
  }, [id])
  return (
    <>
        <h2>상세페이지</h2>
        <Container>
            <Row>
                <Col>
                    <img src={item?.img} />
                </Col>
                <Col>
                    <p>{item?.title}</p>
                    <strong>{item?.price}</strong>
                    <select>
                        <option>사이즈 선택</option>
                        {item?.size.map( data => (
                            <option key={data} value={data}>{data.toUpperCase()}</option>
                        ))}
                    </select>
                    <Button>추가</Button>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default ProductDetail