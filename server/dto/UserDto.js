module.exports = class UserDto {
    id;
    number;
    role;

    constructor(model) {
        this.id = model.id
        this.number = model.number
        this.role = model.role
    }
}