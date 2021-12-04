showNotes();

//if a user add a note then save it to the local storage..
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(){
	let addTitle = document.getElementById('addTitle');
	let addText = document.getElementById('addText');
	let notes = localStorage.getItem('notes');
	if(notes == null){
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notes);
	}
	let myObj = {
		title:addTitle.value,
		text:addText.value
	}
	notesObj.push(myObj);
	localStorage.setItem("notes", JSON.stringify(notesObj));
	addText.value="";
	addTitle.value="";
	console.log(notesObj);
	showNotes();
});
function showNotes(){
	let notes = localStorage.getItem('notes');
	if(notes==null){
		notesObj=[];
	}
	else{
		notesObj=JSON.parse(notes);
	}
	let html="";
	notesObj.forEach(function(element, index){
		html += `
				<div class="col-md-4 my-3 noteCard">
					<div class="card">
						<div class="card-body">
							<h4 class="card-title noteHead">${index +1} ${element.title}</h4>
							<p class="card-text noteText">${element.text}</p>
							<button onclick="deleteNotes(this.id)" id="${index}" class="btn btn-outline-danger">Delete Note</button>
						</div>
					</div>
				</div>
				`
				
		let notesElm = document.getElementById('notes');
		if(notes.length != 0 ){
		notesElm.innerHTML = html;
		}
	});
}
function deleteNotes(index){
	console.log(index)
	let notes = localStorage.getItem('notes')
	if(notes == null){
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notes);
	}
	notesObj.splice(index, 1);
	localStorage.setItem('notes', JSON.stringify(notesObj));
	showNotes();

}
let search = document.getElementById("searchText");
search.addEventListener("input",function(){
	console.log("input event fired");
	let inputVal = search.value;
	let noteCards = document.getElementsByClassName('noteCard');
	Array.from(noteCards).forEach(function(element){
		console.log(element);
		let cardText = element.getElementsByTagName("p")[0].innerText;
		if(cardText.includes(inputVal)){
			element.style.display = "block";
		}
		else{
			element.style.display = "none";
		}
		});
});















