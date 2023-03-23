function addData(event){
    let localData=localStorage.getItem("kwitter_post");
    if(localData != null){
        arr=JSON.parse(localData)
    }
    else{
        arr=[];
    }

    event.preventDefault();
    let title=frm.title.value;
    let discription=frm.txta.value;

    arr.push({"utitle":title, "udis":discription})
    localStorage.setItem("kwitter_post",JSON.stringify(arr))
    window.location="allPost.html"
}

function showData(){
    let localData=localStorage.getItem("kwitter_post");
    if(localData != null){
        arr=JSON.parse(localData)
    }
    else{
        arr=[];
    }
    let cardData="";
    arr.forEach((items,index)=>{
        cardData += ` <div class="col-sm-4" style="padding:20px">
        <div class="card" style="border-radius:20px; border:1px solid; text-align:center;">
  <div class="card-body">
    <h4 class="card-title">${items.utitle}</h4>
    <p class="card-text">${items.udis.slice(0,100)}</p>
    <a href="#" class="btn" onclick="viewData(${index})" style="border:1px solid;border-radius:20px;">More</a>
   
  </div>
</div>
         </div>`
    })
    document.getElementById("card").innerHTML=cardData;
    localStorage.setItem("kwitter_post",JSON.stringify(arr));
}
showData();


function viewData(id){
    localStorage.setItem("index",id);
    window.location="single_data.html"

}
function editData(){
    window.location="edit.html"
    
}


function updateArr(event){
    let editIndex=localStorage.getItem("index");
    let localData=localStorage.getItem("kwitter_post");
    if(localData != null){
        updateArr=JSON.parse(localData)
    }
    else{
        updateArr=[];
    }

    event.preventDefault();
    let title=frm.title.value
    let discription=frm.txta.value

    updateArr[editIndex].utitle=title
    updateArr[editIndex].udis=discription
    localStorage.setItem("kwitter_post",JSON.stringify(updateArr))
     
    window.location="allPost.html"



}