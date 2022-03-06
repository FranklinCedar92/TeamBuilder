class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name);
        super(id);
        super(email);
        this.officeNumber = officeNumber;
    };

    getRole() {
        return console.log('Manager');
    };
};

module.exports = Manager;