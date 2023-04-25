class User {
  
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

// 사용법
let user = new User("john");
// 객체 생성 된 걸 확인 가능
console.log(user)
// 객체 내 함수 실행 가능
user.sayHi();