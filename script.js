//Start of provided Code by freecodecamp.org
let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
//end of provided code

const values = {'PENNY': 0.01,'NICKEL': 0.05,'DIME': 0.10,'QUARTER': 0.25,'ONE': 1,'FIVE': 5,'TEN': 10,'TWENTY': 20,'ONE HUNDRED': 100};

const cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const cidDiv = document.getElementById("cid");
const priceContainer = document.getElementById("price");


let output = ``;

window.onload = () => {
  purchaseBtn.addEventListener('click', checkInput);
  purchaseBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkInput()
    }
  });

  priceContainer.innerText = `Price: $${price}`;
  loadButtons();
  updateCidDiv();
  
}


const checkInput = () => {
  //console.log(registerSum());
  const cashInDrawer = registerSum();
  //console.log("cid: ", cashInDrawer);
  const cashInput = parseFloat(cash.value);
  const change = parseFloat((cashInput - price).toFixed(2));
  const changeValues = calcChange(change);
  console.log(typeof change);
  changeDue.textContent = ``;
  if(change < 0){
    alert("Customer does not have enough money to purchase the item");
  }else if(change === 0.00){
    console.log('test');
    changeDue.textContent = "No change due - customer paid with exact cash";
  }else if(change > cashInDrawer || changeValues["CHANGE"] !== 0){
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    //updateChangeDiv(changeValues);
  }else if(change === cashInDrawer){
    changeDue.textContent = "Status: CLOSED";
    updateChangeDiv(changeValues);
  }else{
    changeDue.textContent = "Status: OPEN";
    updateChangeDiv(changeValues);
  }
  //console.log(cashInput);
}

const updateChangeDiv = valuesInput => {
  changeDue.innerHTML += `<div>`
  Object.entries(valuesInput).reverse().forEach(([key,value]) => {
    if (value > 0){
      changeDue.innerHTML += ` ${key}: $${(value * values[key])}<br>`;
    }
  });
  updateCidDiv();
}

const updateCidDiv = () => {
  cidDiv.innerHTML = `Cash In Drawer<br>`;
  cid.slice().reverse().forEach((el) => {
    //console.log("teset")
    cidDiv.innerHTML += `${el[0]} : ${Math.ceil(el[1] / values[el[0]])}<br>`;
  })
}

const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);

const loadButtons = () => {
  const numberDiv = document.querySelector(".keyboard");
  const createButton = (val) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.id = `btn-${val}`;
    btn.textContent = val;
    btn.addEventListener('click',buttonFuncs);
    numberDiv.insertBefore(btn,purchaseBtn);
  }
  range(0,9).forEach(num => {
    createButton(num);
  })
}

const buttonFuncs = (el) => {
  console.log(el.target.textContent);
  cash.value += el.target.textContent;
}

const calcChange = (change) => {
  let tempObj = {'PENNY': 0,'NICKEL': 0,'DIME': 0,'QUARTER': 0,'ONE': 0,'FIVE': 0,'TEN': 0,'TWENTY': 0,'ONE HUNDRED': 0, 'CHANGE': 0};
  cid.slice().reverse().forEach(el => {
    while((change - values[el[0]]) >= 0){
      if(values[el[0]] * (tempObj[el[0]] + 1) > cid.find(elm => elm[0] === el[0])[1]){
        console.log("Not enough: ",el[0])
        break;
      }
      tempObj[el[0]] += 1;
      change -= values[el[0]];
      change = parseFloat(change.toFixed(2));
    }
  });
  console.log("Change Values: ",tempObj);

  //update cid here
  cid.forEach(el => {
    el[1] -= (tempObj[el[0]] * values[el[0]]);
  })

  //console.log(cid);

  tempObj['CHANGE'] = change;
  
  return tempObj;
}

const registerSum = () => {
  const sum = parseFloat(cid.reduce((acc,cur) => {
    acc += cur[1];
    return acc;
  }, 0).toFixed(2));
  //console.log(sum)
  return sum;
}



