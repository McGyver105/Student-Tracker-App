const filterStudentsByBlock = (students, filter) => {
    if (!students[0]) return [{ name: '', _id: '' }]
    const newArray = []
    students.map((student) => {
        if (student.currentBlock === filter) {
            newArray.push({ name: student.name, _id: student._id })
        }
        return '';
    })
    return newArray;
}

export default filterStudentsByBlock;