import React from "react";

const TodoItem = (props: { task: string; toggleCompletion: () => void; }) => {
    return(
        <div className="flex justify-between p-2 border-b bg-white mb-5">
            <span className="flex-1">{props.task}</span>
            <button onClick={props.toggleCompletion} className="text-xl">
                ✓aaa
            </button>
        </div>
    );
};

export default TodoItem;