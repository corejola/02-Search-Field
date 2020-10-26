import React, { Component } from 'react'
import './Search.css';
import axios from 'axios';
import Loader from './gif/loader.gif';

// using class component
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            results: {},
            loading: false,
            mesage: ''
        }
        this.cancel = ''
    }

    // populate page with all data rows...
    componentDidMount() {
        const url = `http://localhost:8000/findAll`
        axios.get(url).then(res => {
            console.log(res.data)
            this.setState({
                results: res.data
            })
        }).catch(err => {
            console.log(err)
        })

    }


    // dynamic query
    handleInputChange = event => {
        const query = event.target.value
        console.log(query)
        if (!query) {
            this.setState({
                query,
                // results: {},
                message: ''
            })
        } else {
            this.setState({
                query,
                loading: true,
                message: ''
            }, () => {
                // call search in callback function
                this.getSearchResults(query)
            });
        }
    }

    // get search results
    getSearchResults = (query) => {

        console.log(query)
        const searchUrl = `http://localhost:8000/search=${query}`

        if (this.cancel) {
            this.cancel.cancel()
        }
        this.cancel = axios.CancelToken.source()

        axios.get(searchUrl, {
            cancelToken: this.cancel.token
        })
            .then(res => {
                const resultNotFoundMsg = !res.data.length
                    ? "There are no more search results" : "";
                this.setState({
                    results: res.data,
                    message: resultNotFoundMsg,
                    loading: false
                })
            })
            .catch(err => {
                if (axios.isCancel(err) || err) {
                    this.setState({
                        loading: false,
                        message: "Failed to Get Data"
                    })
                }
            })
    }

    renderSearchResults = () => {
        const { results } = this.state;

        if (Object.keys(results).length && results.length) {
            return (
                <div className="results-container">
                    {results.map(result => {
                        return (
                            <div key={result.id} className="result-item">
                                <h6 className="animal-name">{result.common_name} , {result.scientific_name}</h6>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    render() {

        const { query, loading, message } = this.state

        return (
            <div className="container">

                {/* TItle */}
                <h2 className="heading">Live Search</h2>

                {/* Search Input */}
                <label className="search-label w-100" htmlFor="search-input">
                    <input type="text" value={query}
                        id="search-input"
                        placeholder="Search animals by common or scientific names..."
                        onChange={this.handleInputChange} />
                    <i className="fas fa-search search-icon"></i>
                </label>

                {/* Error Message */}
                {message && <p className="message"> {message} </p>}

                {/* loading... */}
                <img src={Loader} className={`search-loading ${loading ? 'show' : 'hide'}`} alt="loading" />

                {/* Results */}
                {this.renderSearchResults()}

            </div>
        )
    }
}

export default Search