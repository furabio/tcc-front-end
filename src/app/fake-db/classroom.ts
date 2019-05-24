import { Classroom } from "app/shared/model/classroom.model";

export class ClassroomFakeDb {
    public static classrooms: Classroom[] = [
        {
            id: 1,
            name: "Sala 201",
            description: "Sala de computadores!"
        },
        {
            id: 2,
            name: "Sala 203",
            description: "Sala de testes!"
        }
    ]
}