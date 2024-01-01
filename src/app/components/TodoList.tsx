"use client"

import React, {useState} from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    // タスクと新しいタスク入力を管理するためのuseState
    const [ tasks, setTasks ] = useState<Array<{ task: string; completed: boolean }>>([]);
    const [ newTask, setNewTask ] = useState('');

    // タスク配列に新しいタスクを追加する関数
    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { task: newTask, completed: false }]);

            setNewTask('');
        }
    };

    // タスク削除
    const removeTask = (index: number) => {
        // タスク配列のコピーを作成
        const newTasks = [...tasks];

        // タスク配列から指定されたタスクを削除
        newTasks.splice(index, 1);

        // タスク配列のステートを更新
        setTasks(newTasks);
    };

    return(
        <div className='p-4'>
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
                className='p-2 border rounded w-full mb-8'
            />
            {/*  */}
            <div>
                {tasks.map((task, index) => (
                    <TodoItem 
                        key={index}
                        task={task.task}
                        // removeTask関数をTodoItemに渡す
                        toggleCompletion={() => removeTask(index)}
                    />
                ))}
            </div>
        </div>
        
    );
};

export default TodoList;