import { Appointment } from "../models/Appointment";
import { Doctor } from "../models/Doctor";
import { Patient } from "../models/Patient";
import * as readLine from 'readline'

export class Hospital{

    //To do a list about patient
    private patient:Patient[]=[]
    //To do a list about doctor
    private doctor:Doctor[]=[]
    //To do a list about Appointments
    private appointment:Appointment[]=[]

    private scanner = readLine.createInterface({
        input:process.stdin,
        output:process.stdout
    })

    showMenu():void{
        console.log('**** Welcome to hospital Dev ****')
        console.log('What do you want to do?')
        console.log('1. Add Doctor')
        console.log('2. Add Patient')
        console.log('3. Create an Appointment')
        console.log('4. Exit')

        this.scanner.question('Select an option', (option) => {
            this.showMethods(parseInt(option))
        })
    }

    showMethods(option:number):void{
        switch(option){
            case 1:
                this.addDoctor()
                break
            case 2:
                this.addPatient()
                break
            case 3:
                this.addAppointment()
                break
            case 4:
                this.scanner.close()
                break
            default:
                console.log('Option incorrect')
                break
        }
    }

    addDoctor():void{
        this.scanner.question("Write the Doctor's name: ", (name) => {
            this.scanner.question("Write the Doctor's speciality: ", (speciality) => {
                this.scanner.question("Write the Doctor's phone: ", (phone) => {
                    const newDoctor = new Doctor(
                        this.doctor.length + 1,
                        name, 
                        speciality,
                        phone
                    )
                    this.doctor.push(newDoctor)
                    this.showMessage('The doctor was created succesfully', newDoctor)
                    this.showMenu()
                })
            })
        })
    }

    addPatient():void{
        this.scanner.question("Write the patient's name: ", (name) => {
            this.scanner.question("Write the patient's age: ", (age) => {
                this.scanner.question("Write the patient's address: ", (address) => {
                    this.scanner.question("Write the patient's phone: ", (phone) => {
                        this.scanner.question("Write the patient's dui: ", (dui) => {
                            const newPatient = new Patient(
                                this.patient.length + 1, 
                                name,
                                parseInt(age),
                                address,
                                phone,
                                dui
                            )
                            this.patient.push(newPatient)
                            this.showMessage('The patient was created succesfully', newPatient)
                            this.showMenu()
                        })
                    })
                })
            })
        })
    }

    addAppointment():void{
        this.scanner.question("Write the Doctor's id: ", (doctor) => {
            const findDoctorById = this.doctor.find(d => d.id === parseInt(doctor))
            if (!findDoctorById){
                return
            }
            this.scanner.question("Write the Patient's id: ", (patient) => {
                const findPatientById = this.patient.find(p => p.id === parseInt(patient))
                if (!findPatientById){
                    return
                }
                this.scanner.question("Write the date of the appointment (DD-MM-YYYY): ", (date) => {
                    const newDate = new Date(date)
                    this.scanner.question('Write the reason of the appointment: ', (reason) => {
                        const newAppointment = new Appointment(
                            this.appointment.length + 1,
                            findPatientById,
                            findDoctorById,
                            newDate,
                            reason
                        )
                        this.appointment.push(newAppointment)
                        this.showMessage('The appointment was created succesfully', newAppointment)
                        this.showMenu()
                    })
                })
            })
        })
    }

    showMessage(message:string, objetc:object):void{
        console.log(`${message} ${JSON.stringify(objetc)}`)
    }
}