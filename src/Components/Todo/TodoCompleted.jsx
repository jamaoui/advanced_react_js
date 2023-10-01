function TodoCompleted({completed}) {
    return (
        <span className={`badge bg-${completed ? 'success' : 'danger'} rounded-5 border-1`}>&nbsp;</span>
    );
}

export default TodoCompleted;