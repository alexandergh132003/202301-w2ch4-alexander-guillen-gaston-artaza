class CodersArray {
  length = 0;

  constructor(...listItems) {
    let i = 0;

    for (const li of listItems) {
      this[i] = li;
      i++;
      this.length++;
    }
  }

  push(value) {
    this[this.length] = value;
    this.length++;
  }

  find(callback) {
    for (let index = 0; index < this.length; index++) {
      if (callback(this[index], index, this) === true) {
        return this[index];
      }
    }

    return undefined;
  }
}

export default CodersArray;
