import React from 'react';

function SearchBar(props) {
    return (
        <form>
            <div className="form-group">
                <label>Book</label>
                <input
                    value={props.search}
                    onChange={props.handleImputChange}
                    type="text"
                    className="form-control"
                    id="bookSearch"
                    placeholder="Book title"
                />
                <small id="bookSearchHelp" className="form-text text-muted">Enter the title of the book you would like to search for!</small>
            </div>
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
        </form>
    )
}

export default SearchBar;