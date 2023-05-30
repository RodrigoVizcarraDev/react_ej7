import { ListGroup } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";
const EmpleadoRow = () => {
    return (
        <ListGroup.Item className="py-0 d-flex align-items-center justify-content-between">
            <EmpleadoAvatar></EmpleadoAvatar>
            <div className=" d-flex flex-column justify-content-center">
                <h1 className="fs-4 m-0 mt-3">Rospo Dev</h1>
                <div className="d-flex gap-1 mt-2">
                    <strong>CEO</strong>
                    <p>Bussines</p>
                </div>
            </div>
        </ListGroup.Item>
    );
};

export default EmpleadoRow;