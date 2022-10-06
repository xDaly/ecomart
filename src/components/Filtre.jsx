import { useState } from "react"





export default function Filtre({ }) {
    const [showFiltre, setShowFiltre] = useState(false)
    return (
        <>
            <div className="d-flex justify-content-between m-3">
                <button className={" filtre-btn " + (!showFiltre ? 'filter-is-visible' : '')} onClick={() => { setShowFiltre(true) }}><i class="fa-regular fa-bars-sort"></i> Filter</button>

                <div className="sorting">
                    <span>Sort By :</span>
                    <select className="sort-select" aria-label="Default select example">
                        <option value="1" defaultChecked>Recommend</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>

            <div className={"cd-filter " + (showFiltre ? 'filter-is-visible' : '')}>
                <form>
                    <div className="cd-filter-block">
                        <h4>Search</h4>

                        <div className="cd-filter-content">
                            <input type="search" placeholder="Try color-1..." />
                        </div>
                    </div>

                    <div className="cd-filter-block">
                        <h4>Check boxes</h4>

                        <ul className="cd-filter-content cd-filters list">
                            <li>
                                <input className="filter" data-filter=".check1" type="checkbox" id="checkbox1" />
                                <label className="checkbox-label" htmlFor="checkbox1">Option 1</label>
                            </li>

                            <li>
                                <input className="filter" data-filter=".check2" type="checkbox" id="checkbox2" />
                                <label className="checkbox-label" htmlFor="checkbox2">Option 2</label>
                            </li>

                            <li>
                                <input className="filter" data-filter=".check3" type="checkbox" id="checkbox3" />
                                <label className="checkbox-label" htmlFor="checkbox3">Option 3</label>
                            </li>
                        </ul>
                    </div>

                    <div className="cd-filter-block">
                        <h4>Select</h4>

                        <div className="cd-filter-content">
                            <div className="cd-select cd-filters">
                                <select className="filter" name="selectThis" id="selectThis">
                                    <option value="">Choose an option</option>
                                    <option value=".option1">Option 1</option>
                                    <option value=".option2">Option 2</option>
                                    <option value=".option3">Option 3</option>
                                    <option value=".option4">Option 4</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="cd-filter-block">
                        <h4>Radio buttons</h4>

                        <ul className="cd-filter-content cd-filters list">
                            <li>
                                <input className="filter" data-filter="" type="radio" name="radioButton" id="radio1" defaultChecked />
                                <label className="radio-label" htmlFor="radio1">All</label>
                            </li>

                            <li>
                                <input className="filter" data-filter=".radio2" type="radio" name="radioButton" id="radio2" />
                                <label className="radio-label" htmlFor="radio2">Choice 2</label>
                            </li>

                            <li>
                                <input className="filter" data-filter=".radio3" type="radio" name="radioButton" id="radio3" />
                                <label className="radio-label" htmlFor="radio3">Choice 3</label>
                            </li>
                        </ul>
                    </div>
                </form>

                <a onClick={() => { setShowFiltre(false) }} className="cd-close">Close</a>

            </div>
        </>
    )
}