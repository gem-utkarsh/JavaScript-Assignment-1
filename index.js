createTable();
function createTable(){
    var table=document.createElement("table");
    document.body.append(table);
    table.style.border="1px solid";
    table.style.width="80%";
    table.style.borderCollapse="collapse";
    const rows=['Name','Age','DOB','email','Company'];
    for(let row in rows){
        var th=document.createElement("th");
        var thText=document.createTextNode(rows[row]);
        th.appendChild(thText);
        table.appendChild(th);
        th.style.border="1px solid";
        th.style.fontWeight="bold";
    }
    const info=[['Utkarsh','22','18/07/1999','utkarsh.srivastava@geminisolutions.com','Gemini Solutions Pvt Ltd'],
    ['Utkarsh-2','22','18/07/1999','utkarsh.srivastava@geminisolutions.com','Gemini Solutions Pvt Ltd'],
    ['Utkarsh-3','22','18/07/1999','utkarsh.srivastava@geminisolutions.com','Gemini Solutions Pvt Ltd'],
    ['Utkarsh-4','22','18/07/1999','utkarsh.srivastava@geminisolutions.com','Gemini Solutions Pvt Ltd'],
    ['Utkarsh-5','22','18/07/1999','utkarsh.srivastava@geminisolutions.com','Gemini Solutions Pvt Ltd'],
    ['Utkarsh-6','22','18/07/1999','utkarsh.srivastava@geminisolutions.com','Gemini Solutions Pvt Ltd']];
    for(let i in info){
        var tr=document.createElement("tr");
        for(let j in info[i]){
        var trText=document.createTextNode(info[i][j]);
        var td=document.createElement("td");
        
        td.style.border="1px solid";
            td.append(trText);
            console.log(td); 
            tr.append(td);   
        }
        table.append(tr);
    }
    console.log(table);
    
}