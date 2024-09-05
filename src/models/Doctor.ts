export class Doctor{
    constructor(
        public id:number,
        public name:string,
        public speciality:string,
        public phone:string
    ){
        this.id = id,
        this.name = name,
        this.speciality = speciality,
        this.phone = phone
    }
}