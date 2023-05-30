import { ListGroup } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";
const EmpleadoRow = ({ listaEmpleados }) => {
    return listaEmpleados.map((empleado) => {
        return (
            <ListGroup.Item
                className="py-0 my-2 bg-light d-flex align-items-center justify-content-between gap-2"
                key={empleado.id}
            >
                <EmpleadoAvatar urlAvatar={empleado.avatar}></EmpleadoAvatar>
                <div className=" d-flex flex-column justify-content-center">
                    <h1 className="fs-4 m-0 mt-3">{empleado.fullName}</h1>
                    <div className="d-flex gap-1 mt-2">
                        <strong>{empleado.title}</strong>
                        <p>{empleado.departament}</p>
                    </div>
                </div>
            </ListGroup.Item>
        );
    });
};

export default EmpleadoRow;
