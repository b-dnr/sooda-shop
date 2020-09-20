import React from 'react'
import { Row, Col } from 'reactstrap'
import ListItem from './ListItem'

function List(props) {
    return (
        <Row>
            {props.data.map((item)=>(
                <Col md={4} key={item.id} className="shadow mb-3 mt-3">
                    <ListItem item={item}/>
                </Col>
            ))}
        </Row>
        
    )
}

export default List
