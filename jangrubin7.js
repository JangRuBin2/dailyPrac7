// exampleOne() 함수는 총 네개의 경우의 수를 분기 함
// 정수기의 필터처럼 데이터 타입과, 원하는 값 검출들을 처리하는 함수
// 필요하지 않은 데이터나, 필요한 데이터, 혹은 안정성을 위한
// 조치로 이러한 함수를 작성해 사용 할 수 있습니다.
// 몇개의 반복문과 몇개의 조건문지 작성 되어 있는데
// 이것을 다른 방법으로 '처리' 할 수 있을까요?

// class의 getter와 setter, hepler method로 '객체 지향' 방힉으로 조립하기도
// 외부 함수, 내부 함수 구조 혹은 클로저로 '함수 지향' 방식을 조립하기도
// 할 수 있는 자바스크립트의 변형성을 탐구해 보시기 바랍니다.
// ? 클래스 테스트
class Test {
  constructor(test) {
    this._test = test;
  }

  what() {
    console.log(this.test)
  }
}
let test = new Test("실험")
// console.log(test)

// exampleOne 함수는 arr, datatype, itemtofind를 매개변수로 받는다
function exampleOne(arr, dataType, itemToFind) {
  test.what()
  // 첫번째로 arr이 배열의 형태가 아니라면 false를 return함
  if(Array.isArray(arr) === false) {
    console.log("배열이 아닙니다");
    return false;
  }
  // itemToFind를 데이터 타입 검사에 활용하려나 보다
  const isDataTypeMatched = (typeof(itemToFind) === dataType);
// 매개변수로 받아온 배열이 itemToFind라는 문자열을 포함하고 있으면 무언가를 처리 해주려나 보다 
  const isItemExist = arr.includes(itemToFind);

  if(isDataTypeMatched === true && isItemExist === true) {
    // 위에서 선언한 변수가 true면 원하는 값을 출력해 줌
    console.log(`${itemToFind}은 배열이 존재합니다`);
    return true;
     // 위에서 선언한 변수가 false면 원하는 값을 출력해 줌
  } else if(isItemExist === false) {
    console.log(`${itemToFind}은 배열에 존재하지 않습니다`);
    return false;
    // 데이터 타입이 맞지 않으면 알려줌
  } else if(isDataTypeMatched === false) {
    console.log(`찾으려는 항목은 ${dataType}이 아닙니다`);
    return false;
  }
}

const basicData = ['안녕하세요', '어디선가', '입력된', '데이터를', '찾아보는', '힘수입니다']
// 배열을 담았을 때 배열인지 검사, 배열에 존재하는 데이터인지 검사, dataType이 매개변수와 일치하는지를 검사
exampleOne(basicData, "number", "어디선가")

// ! 클래스에 다 넣지말고 함수만 작성해서 필요할 때 불러다 쓸 수 있나?


// class ArrayCheck {
//   constructor(basicData, dataType, itemToFind) {
//     this._basicData = basicData;
//     this._dataType = dataType;
//     this._itemToFind = itemToFind;
//   }
  
//   get basicData() {
//     return this._basicData
//   }

//   set basicData(basicData) {
//     this._basicData = basicData;
//   }

//   get itemToFind() {
//     return this._itemToFind
//   }

//   set itemToFind(itemToFind) {
//     this._itemToFind = itemToFind;
//   }

//   test() {
//     console.log(`${this._basicData}`);
//     console.log(`${this._dataType}`)
//   }
//   typeCheck() {
//     // const test = typeof("this._basicData")
//     // console.log(test);
//     // console.log(basicData)
//     // console.log(`${basicData}`)
//   }
// }

// let arrayCheck = new ArrayCheck(basicData,"number","어디선가")
// // 배열이 문자열로 넘어오네?
// arrayCheck.typeCheck()
// console.log(arrayCheck)
