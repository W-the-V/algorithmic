import "./NavBar.css";
import src from "../../images/algorithmic.png";

function NavBar() {
  return (
    <>
      <div className="navbar__outer">
        <img className="logo__img" src={src}></img>
        <div className="header__btn__container">
          <button type="button" class="btn btn-primary">
            <div class="spinner-grow text-primary hidden"></div>
            Bubble Sort
          </button>
          <button type="button" class="btn btn-primary">
            <div class="spinner-grow text-primary hidden"></div>
            Selection Sort
          </button>
          <button type="button" class="btn btn-primary">
            <div class="spinner-grow text-primary hidden"></div>
            Insertion Sort
          </button>
          <button type="button" class="btn btn-primary">
            <div class="spinner-grow text-primary hidden"></div>
            Quick Sort
          </button>
          <button type="button" class="btn btn-primary">
            <div class="spinner-grow text-primary hidden"></div>
            Merge Sort
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
