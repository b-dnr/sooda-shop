import React, { useEffect, useState } from 'react'
import List from '../../components/products/List'
import { Container } from 'reactstrap';
import { fetchData } from '../../redux/actions'
import { connect } from 'react-redux';
import Pagination from './Pagination';
import Slider from '../../components/carousel/Slider';
import Ad from '../../components/ad/Ad';



function Main(props) {
    const { fetchData } = props;
    const { data } = props;
    
    
    //Pagination
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6)


    //Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProduct = data.slice(indexOfFirstProduct, indexOfLastProduct)
    // Change Page
    const paginate = (pageNumber)=> setCurrentPage(pageNumber)


    useEffect(() => {
        fetchData()
        setProducts(data)
    }, [fetchData]);

    if (props.err) {
        return <h4 className='text-danger'>
            {props.err.message}
        </h4>
    }
    return (
        <div>
            <Slider/>
            <Container>
                <List data={currentProduct} />
                <Pagination 
                productsPerPage={productsPerPage} 
                totalProducts={data.length}
                paginate={paginate}
                />
                <Ad />
            </Container>
        </div>
    )
}
const mapStateToProps = (state) => {
    const { data, loading, err } = state.ProductReducer;
    return { data, loading, err };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)

