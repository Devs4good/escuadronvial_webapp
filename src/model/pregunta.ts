import { Respuesta } from './respuesta';

export class Pregunta {
    public id: number;
    public pregunta: boolean;
    public respuestas: Respuesta[];
}