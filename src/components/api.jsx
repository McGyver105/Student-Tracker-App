export const fetchStudents = () => {
    return fetch ('https://nc-student-tracker.herokuapp.com/api/students?graduated=false')
    .then((res) => res.json())
}

export const fetchGraduates = () => {
    return fetch ('https://nc-student-tracker.herokuapp.com/api/students?graduated=true')
    .then((res) => res.json())
}

export const removeStudentFromState = (studentsArray, _id) => {
    for (let i = 0; i < studentsArray.length; i++) {
        if (studentsArray[i]['_id'] === _id)
            studentsArray.splice(i, 1)
    }
        return [...studentsArray]
}