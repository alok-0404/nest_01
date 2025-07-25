import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {

    private students = [
        { id: 1, name: "Alok", age: 23 },
        { id: 2, name: "Ashish", age: 26 },
        { id: 3, name: "Manta", age: 24 },
    ]

    getAllStudents() {
        return this.students;
    }

    getStudenById(id: number) {
        const student = this.students.find((student) => { return student.id === id })
        // const student = this.students.find((student) => {
        //     return student.id === id
        // })
        if (!student) {
            throw new NotFoundException("student not found")
        }
        return student
    }

    createStudent(data: { name: string; age: number }) {
        const newStudent = {
            id: Date.now(),
            ...data
        }
        this.students.push(newStudent);
        return   {
            message: "Student update ho gaya hai",
            student: newStudent
        };
    }


    updateStudent(id: number, data: { name?: string; age?: number }) {
        const studentIndex = this.students.findIndex(student => student.id === id);
        if (studentIndex === -1) {
            throw new NotFoundException("student not found");
        }
        this.students[studentIndex] = {
            ...this.students[studentIndex],
            ...data
        };
        return {
            message: "Student update ho gaya hai",
            student: this.students[studentIndex]
        };
    }

    patchStudent(id: number, data: { name?: string; age?: number }) {
        const studentIndex = this.students.findIndex(student => student.id === id);
        if (studentIndex === -1) {
            throw new NotFoundException("student not found");
        }
        this.students[studentIndex] = {
            ...this.students[studentIndex],
            ...data
        };
        return {
            message: "Student update ho gaya hai",
            student: this.students[studentIndex]
        };
    }

    deleteStudent(id: number) {
        const studentIndex = this.students.findIndex(student => student.id === id);
        if (studentIndex === -1) {
            throw new NotFoundException("student not found");
        }
        this.students.splice(studentIndex, 1);
        return { message: "Student delete ho gaya hai" };
    }
}
