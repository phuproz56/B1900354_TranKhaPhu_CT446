import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import ReactPaginate from "react-paginate";


const Orders = (props) => {
  const { orders } = props;
  const [currentPage, setCurrentPage] = useState(0);
  const [ordersPerPage] = useState(10);

  const offset = currentPage * ordersPerPage;
  const pageCount = Math.ceil(orders.length / ordersPerPage);
  const currentOrders = orders.slice(offset, offset + ordersPerPage);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Tên</th>
          <th scope="col">Email</th>
          <th scope="col">Tổng cộng</th>
          <th scope="col">Thanh toán</th>
          <th scope="col">Ngày</th>
          <th>Trạng thái</th>
          <th scope="col" className="text-end">
            Xác nhận
          </th>
        </tr>
      </thead>
      <tbody>
        {currentOrders.map((order) => (
          <tr key={order._id}>
            <td>
              <b>{order.user.name}</b>
            </td>
            <td>{order.user.email}</td>
            <td>${order.totalPrice}</td>
            <td>
              {order.isPaid ? (
                <span className="badge rounded-pill alert-success">
                  Đã thanh toán {moment(order.paidAt).format("MMM Do YY")}
                </span>
              ) : (
                <span className="badge rounded-pill alert-danger">
                  Chưa thanh toán
                </span>
              )}
            </td>
            <td>{moment(order.createdAt).format("MMM Do YY")}</td>
            <td>
              {order.isDelivered ? (
                <span className="badge btn-success">Đã Giao Hàng</span>
              ) : (
                <span className="badge btn-dark">Chưa Giao Hàng</span>
              )}
            </td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order/${order._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
        ))}
        <div className="pagination-wrapper">
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
  </div>
      </tbody>
    </table>
  );
};

export default Orders;
