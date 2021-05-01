import React from "react";
import "./styles.css";

export default function Form() {
  return (
    <div class="card-body">
      <form class="form-inline" id="search-form">
        <input
          type="search"
          id="search-input"
          autocomplete="off"
          placeholder="Enter a city"
          aria-label="Search"
        />

        <input
          class="btn btn-light"
          id="search-button"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
}
