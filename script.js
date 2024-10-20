function volume_sphere() {
    //Write your code here
	var ans;
	let elem1=document.getElementById("radius").value;
	let rad = parseFloat(elem1);
	let elem2=document.getElementById("volume");
	let elem3=document.getElementById("submit");
	if(!NaN(rad) && rad>0){
		 ans= (4 / 3) * Math.PI * Math.pow(rad, 3);
		elem3.addEventListener("click",function(rad) {
		elem2.textContent=ans;
	})
}
	else{
		elem2.textContent =NaN;
	}
	
	

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
