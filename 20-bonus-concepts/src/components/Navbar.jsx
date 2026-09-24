const Navbar = (props) => {
  function changeTheme() {
    props.settheme("Dark");
  }

  return (
    <div>
      <button onClick={changeTheme}>Change theme</button>
    </div>
  );
};

export default Navbar;
