import React, { Component } from 'react';
import Banner from '../../components/banner';
import CardContainer from '../../components/cardContainer';
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
    componentDidMount() {
        Api.getBooks()
            .then(res => {
                const books = res.data;
                console.log(books);
                console.log(books[0].link.slice(1, -1))
                this.setState({ results: books })
            })
    }



    render() {
        return (
            <>
                <Banner />
                <CardContainer title="Saved Books">
                    {this.state.results.map((result, index) => (
                        <BookTile
                            key={index}
                            title={result.title}
                            author={result.author}
                            image={result.image}
                            description={result.description}
                            link={result.link}
                        />
                    )
                    )}
                </CardContainer>
            </>
        )
    }
}

export default Main;