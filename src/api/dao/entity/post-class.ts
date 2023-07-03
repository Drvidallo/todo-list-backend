export class post {
    private id: string;
    private title: string;
    private message: string;


    constructor (id:string, title: string, message:string ) {
        this.id = id;
        this.title = title;
        this.message = message;
    }
    public getId(): string {
        return this.id;
      }

    public getTitle(): string {
        return this.title;
      }
    
    public getMessage(): string {
        return this.message;
      }
}