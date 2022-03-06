class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name);
        super(id);
        super(email);
        this.school = school;
    };

    getSchool() {};

    getRole() {
        return console.log('Intern');
    };
};

module.exports = Intern;