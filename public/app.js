import Student from "./student.js";

export default class App {
  constructor() {
   // this._onClickBetter = this._onClickBetter.bind(this);
    this._onClickBetter = this._onClickBetter.bind(this);


    let button = document.querySelector("#button");
    button.addEventListener("click", this._onClickBetter);
  }

  async _onClickBetter(event) {
    // let res = await fetch("myfile.txt");
    // let text = await res.text();
    // let res2 = await fetch("person.json");
    // let obj = await res2.json();
    // let s = `${text}\n${obj.givenName} ${obj.surname}`;
    // document.querySelector("#results").textContent = s;
    let res = await fetch("/api/text");//return promise + respone
    let text = await res.text();
    console.log(text);

    let res2 = await fetch("/api/students/nkishnani");
    let obj = await res2.json();

    let s = `${text}\n${obj.givenName} ${obj.surname}`;
    document.querySelector("#results").textContent = s;
    
    console.log("javascript object", obj);

    let student = new Student(obj);
    console.log(student);

    let student2 = await Student.load("knazir");
    console.log("Student 2", student2);
    await student2.declare("it");
    console.log("updated student 2", student2);

    let courses = await student2.listCourses();
    console.log("courses: ", courses);

  }
}
