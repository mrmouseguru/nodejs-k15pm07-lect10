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

  async declare(deptCode){
    let body = {dept: deptCode};
   let res = await fetch(`/api/students/${this.id}`, {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(body)
    });

    let data = await res.json();

    if(res.status !== 200){
      throw new Error(data.error);
    }

    this.dept = data.dept;
  }
}
