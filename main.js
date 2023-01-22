// Filters slide
function openFiltersMenu() {
	document.getElementById('filters-menu').style.width = '250px';
}

function closeFiltersMenu() {
	document.getElementById('filters-menu').style.width = '0';
}
	
// Plus slide	
function openPlusMenu() {
	document.getElementById('plus-menu').style.width = '300px';
}

function closePlusMenu() {
	document.getElementById('plus-menu').style.width = '0';
}

// Slides
function callOne() {
	openFiltersMenu()
	closePlusMenu()
	closeProfile()
	closeProfileLogin()
}

function callTwo() {
	openPlusMenu()
	closeFiltersMenu()
	closeProfile()
	closeProfileLogin()
}

// Photo text
function photoTxt() {
	placeCustomTxt.innerHTML = "No photo chosen, yet.";
}

function photoReset() {
	photoTxt()
	closePlusMenu()
}

// Search
function openSearchBar() {
  document.getElementById('search-mobile').style.display = "block";
}

function closeSearchBar() {
  document.getElementById('search-mobile').style.display = "none";
}

function openSearchBtn() {
  document.getElementById('search-btn-close').style.display = "block";
}

function closeSearchBtn() {
  document.getElementById('search-btn-close').style.display = "none";
}

function openSearchIcon() {
  document.getElementById('search-button-mobile').style.display = "block";
}

function closeSearchIcon() {
  document.getElementById('search-button-mobile').style.display = "none";
}

function openSearch() {
	openSearchBar()
	openSearchBtn()
	openSearchIcon()
	closePlusMenu()
	closeFiltersMenu()
	closeProfile()
	closeProfileLogin()
}

function closeSearch() {
	closeSearchBar()
	closeSearchBtn()
	closeSearchIcon()
}

// Profile
function openProfile() {
	document.getElementById('profile-slide').style.display = "block";
	closePlusMenu()
	closeFiltersMenu()
	closeSearch()
	closeProfileLogin()
}

function closeProfile() {
	document.getElementById('profile-slide').style.display = "none";
}

function openProfileLogin() {
	document.getElementById('profile-slide-login').style.display = "block";
	closePlusMenu()
	closeFiltersMenu()
	closeSearch()
	closeProfile()
}

function closeProfileLogin() {
	document.getElementById('profile-slide-login').style.display = "none";
}

function passwordConfirm() {
    // Checks if both passwords are the same
	var password = document.querySelector('.password').value,
		repeatPassword = document.querySelector('.password-repeat').value;

		if (password != repeatPassword) {
			alert("Password and Repeat Password don't match!");
			return false
		}
		return true
}

// Map
window.onload = function () {
    // Insert map and map settings
	L.mapquest.key = 'unmWn2J2waLlEoiUE2UdAniDDm91ZG64'; // MapQuest ID (free on signup)

	L.mapquest.map('map', {
 	 center: [50.08804, 14.42076],
 	 layers: L.mapquest.tileLayer('map'),
 	 zoom: 3
	});
}

// Search
// placeSearch({
//   key: 'KEY',
//   container: document.querySelector('#search')
// });