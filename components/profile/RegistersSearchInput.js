const SearchInput = () => (
  //   const dropdown = document.getElementById('myDropdown');
  //   dropdown.length = 0;

  //   const defaultOption = document.createElement('option');
  //   defaultOption.text = 'Choose State/Province';

  //   dropdown.add(defaultOption);
  //   dropdown.selectedIndex = 0;

  //   const url = 'https://api.myjson.com/bins/7xq2x';

  //   fetch(url)
  //     .then((response) => {
  //       if (200 !== response.status) {
  //         console.warn('Looks like there was a problem. Status Code: ' + response.status);
  //         return;
  //       }

  //       // Examine the text in the response
  //       response.json().then((data) => {
  //         let option;

  //         for (let i = 0; i < data.length; i++) {
  //           option = document.createElement('option');
  //           option.text = data[i].name;
  //           option.value = data[i].abbreviation;
  //           dropdown.add(option);
  //         }
  //       });
  //     })
  //     .catch((err) => {
  //       console.error('Fetch Error -', err);
  //     });
  <div className="dropdown">
    <input
      className="regiserPageInput h-12 w-full bg-registerPageInputGrey my-4 rounded-md "
      placeholder="בחר עיר *"
      onClick={myFunction}
    />

    <div id="myDropdown" className="dropdown-content">
      <input type="text" placeholder="Search.." id="myInput" onKeyUp={filterFunction} />
      <a href="#about">About</a>
      <a href="#base">Base</a>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact</a>
      <a href="#custom">Custom</a>
      <a href="#support">Support</a>
      <a href="#tools">Tools</a>
      <a href="#tools1">Tools</a>
      <a href="#tools2">Tools</a>
      <a href="#tools3">Tools</a>
      <a href="#tools4">Tools</a>
      <a href="#tools5">Tools</a>
      <a href="#tools6">Tools</a>
    </div>
  </div>
);
export default SearchInput;
