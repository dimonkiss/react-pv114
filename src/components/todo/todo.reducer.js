import { useReducer } from "react";

const initialTasks = [
    {
        id: 1,
        title: "task1",
        complete: false,
    },
    {
        id: 2,
        title: "task2",
        complete: false,
    },
    {
        id: 3,
        title: "task3",
        complete: false,
    }
]


// =====ACTIONS =====
const TODO_ACTIONS = {
    COMPLETE: "COMPLETE",
    ADD: "ADD",
    DELETE: "DELETE"
}

const taskReducer = (state, action) => {
    const { type, id } = action;
    switch (type) {
        case TODO_ACTIONS.COMPLETE:
            return state.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        complete: !task.complete
                    }
                } else {
                    return task;
                }
            });
        case TODO_ACTIONS.DELETE:
            return state.filter((task)=>task.id!==id);
        default:
            return state;
    }
}

export default function Todos() {
    const [tasks, dispatch] =useReducer(taskReducer,initialTasks);
    const handleComplete=(task)=>{
        dispatch({type: TODO_ACTIONS.COMPLETE, id: task.id })
    }
    const handleDelete=(task)=>{
        dispatch({type: TODO_ACTIONS.DELETE, id: task.id })
    }

    return (
        <>
            {tasks.map((task) => (
                <div key={task.id}>
                    <label>
                        <input type="checkbox" checked={task.complete} onChange={()=>handleComplete(task)} />
                    </label>
                    {task.title}
                    <label>
                        <input type="button" value="DELETE"  onClick={()=>handleDelete(task)}/>
                    </label>
                </div>
            ))}
        </>
    )
}