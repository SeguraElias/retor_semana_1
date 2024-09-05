"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hospital = void 0;
const Appointment_1 = require("../models/Appointment");
const Doctor_1 = require("../models/Doctor");
const Patient_1 = require("../models/Patient");
const readLine = __importStar(require("readline"));
class Hospital {
    constructor() {
        //To do a list about patient
        this.patient = [];
        //To do a list about doctor
        this.doctor = [];
        //To do a list about Appointments
        this.appointment = [];
        this.scanner = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    showMenu() {
        console.log('**** Welcome to hospital Dev ****');
        console.log('What do you want to do?');
        console.log('1. Add Doctor');
        console.log('2. Add Patient');
        console.log('3. Create an Appointment');
        console.log('4. Exit');
        this.scanner.question('Select an option', (option) => {
            this.showMethods(parseInt(option));
        });
    }
    showMethods(option) {
        switch (option) {
            case 1:
                this.addDoctor();
                break;
            case 2:
                this.addPatient();
                break;
            case 3:
                this.addAppointment();
                break;
            case 4:
                this.scanner.close();
                break;
            default:
                console.log('Option incorrect');
                break;
        }
    }
    addDoctor() {
        this.scanner.question("Write the Doctor's name ", (name) => {
            this.scanner.question("Write the Doctor's speciality ", (speciality) => {
                this.scanner.question("Write the Doctor's phone ", (phone) => {
                    const newDoctor = new Doctor_1.Doctor(this.doctor.length + 1, name, speciality, phone);
                    this.doctor.push(newDoctor);
                    this.showMessage('The doctor was created succesfully', newDoctor);
                    this.showMenu();
                });
            });
        });
    }
    addPatient() {
        this.scanner.question("Write the patient's name ", (name) => {
            this.scanner.question("Write the patient's age ", (age) => {
                this.scanner.question("Write the patient's address ", (address) => {
                    this.scanner.question("Write the patient's phone ", (phone) => {
                        this.scanner.question("Write the patient's dui ", (dui) => {
                            const newPatient = new Patient_1.Patient(this.patient.length + 1, name, parseInt(age), address, phone, dui);
                            this.patient.push(newPatient);
                            this.showMessage('The patient was created succesfully', newPatient);
                            this.showMenu();
                        });
                    });
                });
            });
        });
    }
    addAppointment() {
        this.scanner.question("Write the Doctor's id ", (doctor) => {
            const findDoctorById = this.doctor.find(d => d.id === parseInt(doctor));
            if (!findDoctorById) {
                return;
            }
            this.scanner.question("Write the Patient's id ", (patient) => {
                const findPatientById = this.patient.find(p => p.id === parseInt(patient));
                if (!findPatientById) {
                    return;
                }
                this.scanner.question("Write the date of the appointment (DD-MM-YYYY) ", (date) => {
                    const newDate = new Date(date);
                    this.scanner.question('Write the reason of the appointment ', (reason) => {
                        const newAppointment = new Appointment_1.Appointment(this.appointment.length + 1, findPatientById, findDoctorById, newDate, reason);
                        this.appointment.push(newAppointment);
                        this.showMessage('The appointment was created succesfully', newAppointment);
                        this.showMenu();
                    });
                });
            });
        });
    }
    showMessage(message, objetc) {
        console.log(`${message} ${JSON.stringify(objetc)}`);
    }
}
exports.Hospital = Hospital;
