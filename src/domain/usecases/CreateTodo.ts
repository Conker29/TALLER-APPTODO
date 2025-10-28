import {Todo, CreateTodoDTO} from "../entities/Todo";
import {TodoRepository} from "../repositories/TodoRepository";

export class CreateTodo {
    constructor(private repository: TodoRepository) {}
    async execute(data: CreateTodoDTO): Promise<Todo> {

        if (!data.title.trim()) {
            throw new Error("Titulo no puede estar vacío");
        }

        if (data.title.length > 200) {
            throw new Error("Titulo no puede exceder 200 caracteres");
        }
        return await this.repository.create(data);                  
    } }