// exampleOne() 함수는 총 네개의 경우의 수를 분기 함
// 정수기의 필터처럼 데이터 타입과, 원하는 값 검출들을 처리하는 함수
// 필요하지 않은 데이터나, 필요한 데이터, 혹은 안정성을 위한
// 조치로 이러한 함수를 작성해 사용 할 수 있습니다.
// 몇개의 반복문과 몇개의 조건문지 작성 되어 있는데
// 이것을 다른 방법으로 '처리' 할 수 있을까요?

// class의 getter와 setter, hepler method로 '객체 지향' 방힉으로 조립하기도
// 외부 함수, 내부 함수 구조 혹은 클로저로 '함수 지향' 방식을 조립하기도
// 할 수 있는 자바스크립트의 변형성을 탐구해 보시기 바랍니다.

// exampleOne 함수는 arr, datatype, itemtofind를 매개변수로 받는다
function exampleOne(arr, dataType, itemToFind) {
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
    console.log(`${itemToFind}은 배열이 존재합니다`);
    return false;
  } else if(isItemExist === false) {
    console.log(`${itemToFind}은 배열에 존재하지 않습니다`);
    return false;
  } else if(isDataTypeMatched === false) {
    console.log(`찾으려는 항목은 ${dataType}이 아닙니다`);
    return false;
  }
}

const basicData = ['안녕하세요', '어디선가', '입력된', '데이터를', '찾아보는', '힘수입니다']