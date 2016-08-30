export const ADD_TODO = 'ADD_STATUS'

let nextTodoId = 0;

export function addTodo(status) {
   return {
      type: ADD_TODO,
      id: nextTodoId++,
      payload: {date: status.date, project: status.project, section: status.section, timehr: status.timehr, timemin: status.timemin, status: status.status}
   };
}
