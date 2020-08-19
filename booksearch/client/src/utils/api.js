import axios from "axios";

export default {
    // Gets all books
    searchBooks: function (term) {
        const url = "https://www.googleapis.com/books/v1/volumes?q=" + term;
        return axios.get(url);

    },

    saveBooks: function (book) {
        return axios.post("/api/books", book);
    },

    getBooks: function () {
        return axios.get("/api/books");
    }


};