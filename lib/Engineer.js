class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name),
        super(id);
        super(email),
        this.github = github;
    }

    getGithub() {};

    getRole() {
        return console.log('Engineer');
    };
};

module.exports = Engineer;