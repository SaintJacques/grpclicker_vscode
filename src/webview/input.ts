export class Input {
  constructor(
    public proto: string,
    public version: string,
    public requestName: string,
    public requestRepresentation: string,
    public responseName: string,
    public responseRepresentation: string,
    public adress: string,
    public call: string,
    public tls: boolean,
    public stream: boolean,
    public meta: string[]
  ) {}
}
