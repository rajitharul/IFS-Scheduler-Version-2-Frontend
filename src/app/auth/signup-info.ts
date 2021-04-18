export class SignupInfo {
    name: string;
    username: string;
    type: string;
    qualifications : string[];
    email: string;
    contactNo: string;
    role: string[];
    password: string;


    constructor(name: string, username: string, type: string, qualifications : string[], email: string, contactNo: string, password: string) {
        this.name = name;
        this.username = username;
        this.type = type;
        this.qualifications=qualifications;
        this.email = email;
        this.contactNo = contactNo;
        this.password = password;
        this.role = ['trainer'];
    }
}
