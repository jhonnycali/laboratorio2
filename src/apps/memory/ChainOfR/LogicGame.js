class LogicGame{
    constructor(){}
    setNext(next){
        this.next=next;
    }
    getNext(){
        return this.next;
    }
    process(){
        throw new Error("esta es una función abstarcta, no puede ser llamada ");
    }
}
export default LogicGame;