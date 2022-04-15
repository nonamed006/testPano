import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          지도
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <button style={{position: 'absolute', bottom:'10', right: '20'}}>move</button>
        <img src='./map/map01.jpg' 
				width='270px'
				height='200px'/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Mapmodal = () => {
	const [modalShow, setModalShow] = useState(false);
	return (
		<>
			<span className="material-icons" onClick={() => setModalShow(true)} style={{ color: 'white', fontSize: '30px' }} >
					map
				</span>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
		</>
	);
};

export default Mapmodal;