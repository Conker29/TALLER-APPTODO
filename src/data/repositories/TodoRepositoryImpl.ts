import { TodoRepository } from "../../domain/repositories/TodoRepository";
import { Todo, CreateTodoDTO, UpdateTodoDTO } from "../../domain/entities/Todo";
import { SQLiteTodoDataSource } from "../datasources/SQLiteTodoSourse";


export class TodoRepositorylmpl implements TodoRepository {
    // Implementación de los métodos del repositorio aquí
    constructor(private dataSource: SQLiteTodoDataSource) {}

    async getAll(): Promise<Todo[]> {
        return await this.dataSource.getAllTodos();
    }

    async getById(id: string): Promise<Todo | null> {
        return await this.dataSource.getTodoById(id);
    }

    async create(data: CreateTodoDTO): Promise<Todo> {
        return await this.dataSource.createTodo(data.title);
    }

    async update(data: UpdateTodoDTO): Promise<Todo > {
        return await this.dataSource.updateTodo(
        data.id,
        data.title,
        data.completed
        );
    }

    async delete(id: string): Promise<void> {
        await this.dataSource.deleteTodo(id);
    }
}
