export default class TodoModel {
    constructor(title, completed = false, id = null) {
        this.id = id
        this.title = title
        this.completed = completed
    }
}