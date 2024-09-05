import { Doctor } from "./Doctor";
import { Patient } from "./patient";

export class Appointment{
    constructor(
        public id:number,
        public patient:Patient,
        public doctor:Doctor,
        public date:Date,
        public reason:string
    ){
        this.id = id,
        this.patient = patient,
        this.doctor = doctor,
        this.date = date,
        this.reason = reason
    }
}