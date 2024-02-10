export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'Name');
    this._length = this.validateNumber(length, 'Length');
    this._students = this.validateArray(students, 'Students');
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName, 'Name');
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.validateNumber(newLength, 'Length');
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateArray(newStudents, 'Students');
  }

  // Helper method to validate string type
  static validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  // Helper method to validate number type
  static validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  // Helper method to validate array type
  static validateArray(value, attribute) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attribute} must be an array`);
    }
    return value;
  }
}
