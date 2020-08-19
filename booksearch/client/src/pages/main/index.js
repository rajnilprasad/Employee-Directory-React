import React, { Component } from 'react';
import Banner from '../../components/banner';
import CardContainer from '../../components/cardContainer';
import SearchBar from '../../components/searchBar';
import Api from '../../utils/api';
import BookTile from '../../components/bookTile';

class Main extends Component {
    state = {
        search: "",
        results: []
    }

    handleImputChange = event => {
        this.setState({ search: event.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        Api.searchBooks(this.state.search)
            .then(res => {
                this.setState({ results: res.data.items });
                console.log(this.state.results);
            })

    }

    handleBookSave = event => {
        event.preventDefault();
        // const index = this.event.target.index;

        const index = parseInt(event.target.value);
        const saved = this.state.results[index];
        console.log(saved);



        const book = {
            title: (JSON.stringify(saved.volumeInfo.title)).slice(1, -1),
            author: (JSON.stringify(saved.volumeInfo.authors)).slice(1, -1),
            image: (JSON.stringify(saved.volumeInfo.imageLinks.smallThumbnail)).slice(1, -1),
            description: (JSON.stringify(saved.volumeInfo.description)).slice(1, -1),
            link: (JSON.stringify(saved.volumeInfo.infoLink)).slice(1, -1)
        }
        console.log(book);
        console.log(event.target);

        Api.saveBooks(book)
            .then(res => {
                console.log("saved");
            })



    }

    render() {
        return (
            <>
                <Banner />
                <CardContainer title="Book Search">
                    <SearchBar handleImputChange={this.handleImputChange} handleFormSubmit={this.handleFormSubmit} />
                </CardContainer>
                <CardContainer title="Results">
                    {this.state.results.map((result, index) => (
                        <BookTile
                            key={index}
                            status="search"
                            title={result.volumeInfo.title}
                            author={result.volumeInfo.authors}
                            image={result.volumeInfo.imageLinks.smallThumbnail}
                            description={result.volumeInfo.description}
                            link={result.volumeInfo.infoLink}
                            handleBookSave={this.handleBookSave}
                            value={index}
                            index={index}
                        />
                    )
                    )}
                </CardContainer>
            </>
        )
    }
}

export default Main;