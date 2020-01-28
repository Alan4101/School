class Subject {
    constructor(subjectData){
        this.name = subjectData.name || '';
        this.class_room = subjectData.class_room || '';
        this.subjectNumber = subjectData.subjectNumber || '';
        this.timeStart = subjectData.timeStart || '';
        this.timeEnd = subjectData.timeEnd || '';
    }
}
module.exports = Subject;