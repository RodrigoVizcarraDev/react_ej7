import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";
import { useState } from "react";

const EmpleadoList = () => {
    const [empleados, setEmpleados] = useState([
        {
            id: 1,
            fullName: "Rodrigo Vizcarra",
            title: "CEO",
            departament: "Development",
            avatar: "https://unavatar.io/rospodev",
        },
        {
            id: 2,
            fullName: "Miguel Duran",
            title: "Manager",
            departament: "Marketing",
            avatar: "https://unavatar.io/midudev"
        },
    ]);

    // let empleados = [
    //     {
    //         id: 1,
    //         fullName: "Rodrigo Vizcarra",
    //         title: "CEO",
    //         departament: "Development",
    //         avatar: "https://unavatar.io/rospodev",
    //     },
    //     {
    //         id: 2,
    //         fullName: "Andrea Quintana",
    //         title: "Manager",
    //         departament: "Marketing",
    //         avatar: "https://unavatar.io/andyQuintana"
    //     }
    // ];
    return (
        <ListGroup className="m-5 mx-auto" style={{width:"max-content"}}>
            <EmpleadoRow listaEmpleados={empleados}></EmpleadoRow>
        </ListGroup>
    );
};

export default EmpleadoList;
