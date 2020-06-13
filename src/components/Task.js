// Es el componente que me va a mostrar la tarea
import React from 'react';
import axios from 'axios';

const Task = (props) => {

    const DELETE = ''
    const PATCH = ''

    const deleteTask = (id) => {
        axios.delete(`${DELETE}${id}.json`)
            .then(() => props.getTasks())
            .catch((error) => alert("ocurrio un error al eliminar la tarea" + error))
    }

    const updateTask = (status) => {
        const body = {
            [props.id]: {
                title: props.title,
                priority: props.priority,
                time: props.time,
                done: status
            }
        }

        axios.patch(PATCH, body)
        .then(() => props.getTasks())
        .catch((error) => alert('Ocurrio un error al actualizar' + error))
    }

    return (
        <div className="card">
            <h1>{props.title}</h1>
            <p>Prioridad: {props.priority}</p>
            <small>Time: {props.time}</small>
            <p>{props.done}</p>
            <div className="row justify-content-center">
                <div className="col-3">
                    <button type="button" className="btn btn-danger" onClick={() => deleteTask(props.id)}>Eliminar</button>
                </div>
                <div className="col-3">
                    {props.done
                        ? <button type="button" className="btn btn-secondary" onClick={() => updateTask(false)}>Deshacer</button>
                        : <button type="button" className="btn btn-success" onClick={() => updateTask(true)}>Completar</button>}

                </div>
            </div>
        </div>
    )
}

export default Task;
