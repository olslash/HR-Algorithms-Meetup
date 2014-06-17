var Heap = function(comparator) {
    this._data = [];
};

// Helper methods.
Heap.prototype._leftChildOf = function(index) {
    return 2 * index + 1;
};
Heap.prototype._rightChildOf = function(index) {
    return 2 * index + 2;
};
Heap.prototype._parentOf = function(index) {
    return index ? Math.floor((index - 1) / 2) : undefined;
};
Heap.prototype._hasElementAt = function(index) {
    return typeof this._data[index] !== "undefined";
};
Heap.prototype._swap = function(index1, index2) {
    var temp = this._data[index1];
    this._data[index1] = this._data[index2];
    this._data[index2] = temp;
};
Heap.prototype.show = function() {
    console.log(this._data);
    return this._data;
};

// For you to complete:
Heap.prototype.peek = function() {
    return this._data[0];
};

Heap.prototype.insert = function(element) {
    // push to end
    // last = array.length -1 compare to parent of last

    // else 
    // // while ( current < parent )
    // // // swap last and parent
    this._data.push(element);
    var currentIndex = this._data.length - 1;
    var parentIndex = this._parentOf(currentIndex);


    while (this._data[currentIndex] < this._data[parentIndex]) {
        console.log(JSON.stringify(this._data));

        var temporary = this._data[parentIndex];
        this._data[parentIndex] = this._data[currentIndex];
        this._data[currentIndex] = temporary;

        currentIndex = parentIndex;
        console.log(JSON.stringify(this._data));

        if (currentIndex === 0) break;
        parentIndex = this._parentOf(currentIndex);

    }
};


Heap.prototype.extract = function() {
    //remove 0 element
    //take last element and place at 0
    //currentIndex = 0,

    //compare curentIndexElement to min(childen)
    //if currentIndex > min(childen) swap with with min
    //if currentIndex < = min(children) done
    if(this._data.length === 0) { return undefined; }

    var firstElement = this._data.shift();

    if(this._data.length === 0) { return firstElement; }

    this._data.unshift(this._data.pop());

    do {
        var currentIndex = 0;
        var leftChildIndex = this._leftChildOf(currentIndex);
        var rightChildIndex = this._rightChildOf(currentIndex);
        var minChildIndex;

        if (leftChildIndex > this._data.length -1) {
            return firstElement;
        } else if (rightChildIndex > this._data.length -1) {
            rightChildIndex = leftChildIndex;
        }

        if (this._data[leftChildIndex] <= this._data[rightChildIndex]) {
            minChildIndex = leftChildIndex;
        } else {
            minChildIndex = rightChildIndex;
        }

        this._swap(currentIndex, minChildIndex);

        currentIndex = minChildIndex;

    } while (this._data[currentIndex] < this._data[minChildIndex]);


    // check if in bounds


};