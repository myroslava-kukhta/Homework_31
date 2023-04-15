'use strict';

class Student {
  attendance = new Array(25);

  constructor(name, surname, birthyear, marks ) {
    this.name = name;
    this.surname = surname;
    this.birthyear = birthyear;
    this.marks = marks;
  }

  getBirthInfo() {
    let year = 2023;
    return `${this.name} : ${year} - (${this.birthyear} years old)`;
  }

  getMarksInfo() {
    const calcMarks = (
      this.marks.reduce((a, b) => a + b) / this.marks.length
    );
    console.log(`Average mark ${calcMarks}`);
    return calcMarks;
  }

  present() {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === undefined) {
        this.attendance[i] = true;
        break;
      }
    }
  }

  absent() {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === undefined) {
        this.attendance[i] = false;
        break;
      }
    }
  }


  averageAttendance() {
    const calcAttendance = (
      this.attendance.filter((item) => item === true).length /
      this.attendance.filter((item) => item === true || item === false).length
   ).toFixed(1);;
    console.log(`Attendance ${calcAttendance}`);
    return calcAttendance;
  }

  summary() {
    const numberMarks = this.getMarksInfo();
    const numberAttendance = this.averageAttendance();
    
    if (numberMarks > 90 && numberAttendance > 0.9) {
    console.log("Молодець!");
    } else if (numberMarks >= 90 || numberAttendance >= 0.9) {
      console.log("Добре, але можна краще");
    } else {
    console.log("Редиска!");
    }
  }
}

const taras = new Student("Taras", "Reduska", "2003", [60, 50, 60, 55]);
const olena = new Student("Olena", "Horosha", "2004", [80, 90, 90, 92]);
const tanya = new Student("Tetyana", "Blesk", "2005", [91, 90, 93, 92]);

taras.absent();
taras.absent();
taras.absent();
taras.absent();
taras.absent();
taras.present();
taras.present();
taras.present();
taras.present();
taras.present();
taras.getBirthInfo();
taras.summary();
console.log(taras);

olena.present();
olena.present();
olena.present();
olena.absent();
olena.present();
olena.present();
olena.present();
olena.present();
olena.getBirthInfo();
olena.summary();
console.log(olena);

tanya.present();
tanya.present();
tanya.present();
tanya.present();
tanya.present();
tanya.present();
tanya.present();
tanya.getBirthInfo();
tanya.summary();
console.log(tanya);