export class User {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    sex: string;
    newsletter: boolean;
    notice: string;
    bank: string;
    iban: string;
    payment : string;
    feedback : string;
    feedbackstatus : boolean;


    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName: '';
        this.lastName = obj ? obj.lastName: '';
        this.email = obj ? obj.email: '';
        this.birthDate = obj ? obj.birthDate: '';
        this.street = obj ? obj.street: '';
        this.zipCode = obj ? obj.zipCode: '';
        this.city = obj ? obj.city: '';
        this.sex = obj ? obj.sex: '';
        this.newsletter = obj ? obj.newsletter: '';
        this.notice = obj ? obj.notice: '';
        this.bank = obj ? obj.bank: '';
        this.iban = obj ? obj.iban: '';
        this.payment = obj ? obj.payment: '';
        this.feedback = obj ? obj.feedback: '';
        this.feedbackstatus = obj ? obj.feedbackstatus: '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName:this.lastName,
            email:this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            sex: this.sex,
            newsletter: this.newsletter,
            notice: this.notice,
            bank: this.bank,
            iban: this.iban,
            payment: this.payment,
            feedback: this.feedback,
            feedbackstatus: this.feedbackstatus,
        };
    }
}