const submitButton=document.querySelector('#submit');
const nameInput= document.querySelector('#name');
const inputAmount=document.querySelector('#amount');
const table_body=document.querySelector('.table_body');
const msg=document.querySelector('.msg');
submitButton.addEventListener('click',(e)=>{
  e.preventDefault();
  const cell=document.createElement('td');
cell.appendChild(document.createTextNode(nameInput.value));
const row=document.createElement('tr');
row.appendChild(cell);
table_body.appendChild(row);

const cell2=document.createElement('td');
cell2.appendChild(document.createTextNode(inputAmount.value));
row.appendChild(cell2);
table_body.appendChild(row);

const cell3=document.createElement('td');
cell3.appendChild(document.createTextNode(selectedDate));
row.appendChild(cell3);
table_body.appendChild(row);


if(isNaN(inputAmount.value) || inputAmount.value==="" ||nameInput.value==="" || selectedDate==""){
  msg.innerHTML="Enter a valid input"
  msg.style.color="red";
  setTimeout(()=>msg.remove(),3000);
  table_body.removeChild(row);
  
}
const deleteButton=document.createElement('button');
deleteButton.innerHTML='<i class="fa fa-trash"></i>';
deleteButton.style.color='red';
row.appendChild(deleteButton);
deleteButton.addEventListener('click',(e)=>{
    (e).preventDefault();
    const trash=deleteButton.parentElement;
     trash.remove(); 
})
nameInput.value="";
inputAmount.value="";
selectedDate="";
});
