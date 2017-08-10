var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1, 2, 3, 4];
var myObj: any = { name: 'Bill' };
var anythingVariable: any = "hey";
var anythingVariable: any = 25;
var arrayOne: any = [true, false, true, true];
var arrayTwo: any = [1, 'abc', true, 2];
var myObj: any = { x: 5, y: 10 };

class MyNode {
    val: number;
    constructor(valueP: number) {
        this.val = valueP;
    }
    doSomething() {
        console.log("This is okay!");
    }
}
let myNodeInstance = new MyNode(1);

console.log(myNodeInstance.val);

function myFunction(): void {
    console.log('Hello World');
    return;
}

function sendingErrors(): never {
    throw new Error('Error message');
}