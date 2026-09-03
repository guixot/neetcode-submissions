class MinStack {
    private _stack: number[];
    private _minimumStack: number[];

    constructor() {
        this._stack = [];
        this._minimumStack = [];
    }

    push(value: number): void {
        this._stack.push(value);

        if (this._minimumStack.length === 0) {
            this._minimumStack.push(value);
        } else {
            this._minimumStack[this._minimumStack.length - 1] > value
                ? this._minimumStack.push(value)
                : this._minimumStack.push(this._minimumStack[this._minimumStack.length - 1]);
        }
    }

    pop(): void {
        this._stack.pop();
        this._minimumStack.pop();
    }

    top(): number {
        return this._stack[this._stack.length - 1];
    }

    getMin(): number {
        return this._minimumStack[this._minimumStack.length - 1];
    }
}
