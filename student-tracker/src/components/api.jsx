export const fetchStudents = () => {
    return fetch ('https://nc-student-tracker.herokuapp.com/api/students?graduated=false')
    .then((res) => res.json())
}

// export const fetchStudentsByBlock = () => {
//     return fetch ()
// }