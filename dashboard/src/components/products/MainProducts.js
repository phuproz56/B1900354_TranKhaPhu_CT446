

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import ReactPaginate from "react-paginate";


const MainProducts = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { error: errorDelete, success: successDelete } = productDelete;

  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, successDelete]);

  // Logic phân trang
  const offset = currentPage * productsPerPage;
  const pageCount = Math.ceil(products.length / productsPerPage);
  const currentProducts = products.slice(offset, offset + productsPerPage);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Sản phẩm</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            Thêm sản phẩm
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <>
              <div className="row">
                {/* Products */}
                {currentProducts.map((product) => (
                  <Product product={product} key={product._id} />
                ))}
              </div>
              {/* Pagination */}
              {/* <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
              /> */}
              <ReactPaginate
                previousLabel={'«'}
                nextLabel={'»'}
                pageCount={pageCount}
                onPageChange={({ selected }) => setCurrentPage(selected)}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName={'page-item'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainProducts;