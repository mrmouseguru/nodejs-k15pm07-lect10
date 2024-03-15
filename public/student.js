export default class Student {

  constructor(data) {
    Object.assign(this, data);
  }

  static  async  load(id){
    //fetch api
    let res = await fetch(`/api/students/${id}`);
    let json = await res.json();
    return new Student(json);
  }
}
