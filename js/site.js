(function() {
   document.getElementById('footerYear').innerHTML = GetYear();


})();

function GetYear() {
			return (new Date()).getFullYear();
		}
		
