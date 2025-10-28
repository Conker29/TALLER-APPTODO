import { Todo } from "../entities/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export class ToggleTodos {
    constructor(private repository: TodoRepository) {}
    async execute(id: string): Promise<Todo | null> {
        const todo =  await this.repository.getById(id);
        if (!todo) {
            throw new Error("Tarea no encontrada");
            }

            return await this.repository.update({
            id,
            completed: !todo!.completed,
        });
    }
}