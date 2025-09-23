import TaskItem from './TaskItem';

export default function TaskList({tasks, onDelete}) {
    if(tasks.length === 0) {
        return <p>Nema zadataka</p>
    }

    return(
        <ul style={{listStyleType: "none", paddingLeft: 0}}>
            {tasks.map((task) => (
               <TaskItem task={task} onDelete={onDelete} />
            ))}
        </ul>
    )
}