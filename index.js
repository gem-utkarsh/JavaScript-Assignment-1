const divData = document.querySelector("div.tabinfo");

let tableHeaders = ["Name", "Age", "DOB", "Email", "Company"];

let tableData = [
  [
    "Utkarsh Srivastava",
    "22",
    "18-July-1999",
    "utkarsh.srivastava@gmail.com",
    "Gemini Solutions",
  ],
  [
    "Rahul Singh",
    "23",
    "24-July-1998",
    "rahul.singh@gmail.com",
    "Gemini Solutions",
  ],
  [
    "Manoj Pandey",
    "24",
    "12-May-1997",
    "manoj.pandey@gmail.com",
    "Gemini Solutions",
  ],
  [
    "Suryansh Singh",
    "22",
    "8-December-1999",
    "suryansh.singh@gmail.com",
    "Gemini Solutions",
  ],
  [
    "Ravi Taneja",
    "24",
    "6-March-1997",
    "ravi.taneja@gmail.com",
    "Gemini Solutions",
  ],
];

(function () {
  while (divData.firstChild) divData.removeChild(divData.firstChild);
  let myTable = document.createElement("table");
  myTable.className = "myTable";

  let myTableHead = document.createElement("thead");
  myTableHead.className = "myTableHead";

  let myTableHeaderRow = document.createElement("tr");
  myTableHeaderRow.className = "myTableHeaderRow";

  tableHeaders.forEach((header) => {
    let myHeader = document.createElement("th");
    myHeader.innerText = header;
    myTableHeaderRow.append(myHeader);
  });

  myTableHead.append(myTableHeaderRow);
  myTable.append(myTableHead);

  let myTableBody = document.createElement("tbody");
  myTableBody.className = "myTable-Body";

  for (var i = 0; i < 5; i++) {
    let myTableBodyRow = document.createElement("tr");
    myTableBodyRow.className = "myTableBodyRow";
    let td1 = document.createElement("td");
    let myName = document.createTextNode(tableData[i][0]);
    td1.appendChild(myName);
    let td2 = document.createElement("td");
    let myAge = document.createTextNode(tableData[i][1]);
    td2.appendChild(myAge);
    let td3 = document.createElement("td");
    let myDob = document.createTextNode(tableData[i][2]);
    td3.appendChild(myDob);
    let td4 = document.createElement("td");
    let myEmail = document.createTextNode(tableData[i][3]);
    td4.appendChild(myEmail);
    let td5 = document.createElement("td");
    let myCompany = document.createTextNode(tableData[i][4]);
    td5.appendChild(myCompany);
    myTableBodyRow.append(td1, td2, td2, td3, td4, td5);
    myTableBody.append(myTableBodyRow);
  }

  myTable.append(myTableBody);
  divData.append(myTable);
})();
