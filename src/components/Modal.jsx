import React from 'react';

const Modal = (props) => {
  let { content } = props;
  return (
    <div className="modal fade" id="modalDetail" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="modalDetail">
              Product Detail
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" />
          </div>
          <div className="modal-body">
            <h2 className="text-center">{content.name}</h2>
            <img
              src={content.image}
              alt={content.name}
              className="mx-auto d-block"
              style={{ maxWidth: '50%' }}
            />
            <p>{content.description}</p>
            <p>
              <span className="fw-bold">Price:</span> ${content.price}
            </p>
            <p>
              <span className="fw-bold">Quantity:</span> {content.quantity}
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
