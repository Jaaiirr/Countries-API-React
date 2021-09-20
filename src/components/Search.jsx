import React from 'react'

const Search = () => {
    return (
        <section className="search">
            <form  className="form">
                <input type="search" name="search" id="search"
                 placeholder="Search a Country"/>
            </form>
            {/* <div>
                <select name="selectCountry" id="selectCountry" className="selectCountry">
                    <option value="Choose a region">Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europa">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div> */}

        </section>
    )
}

export default Search
