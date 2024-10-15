const Type = ()=>(
    <div className="d-flex align-items-center justify-content-center">
        <label >
            <span className="fw-normal text-start filter-search-label">Type</span>
            <select className="form-select filter-search-select fw-bold fs-6">
                <option className="fw-bold fs-6">Used Car</option>
                <option className="fw-bold fs-6">New Car</option>
                <option className="fw-bold fs-6">Vangari Car</option>
            </select>
        </label>
        <div className="vertical-line">

        </div>
    </div>
)
const Make = ()=>(
    <div className="d-flex align-items-center justify-content-center">
        <label >
            <span className="fw-normal text-start filter-search-label">Make</span>
            <select className="form-select filter-search-select fw-bold fs-6">
                <option className="fw-bold fs-6">Infinity</option>
                <option className="fw-bold fs-6">One</option>
                <option className="fw-bold fs-6">Two</option>
                <option className="fw-bold fs-6">Three</option>
            </select>
        </label>
        <div className="vertical-line">

        </div>
    </div>
)

const Year = ()=>(
    <div className="d-flex justify-content-center align-items-center">
        <label >
            <span className="fw-normal fs-7 text-start filter-search-label">Year</span>
            <select className="form-select outline-none fw-bold fs-6 filter-search-select">
                <option value="" className=" fw-bold fs-6">
                    2000
                </option>
                <option value="" className=" fw-bold fs-6">
                    2005
                </option>
                <option value="" className=" fw-bold fs-6">
                    2010
                </option>
                <option value="" className=" fw-bold fs-6">
                    2024
                </option>
            </select>
        </label>
        <div className=" vertical-line"></div>
    </div>
)

const Model = ()=>(
    <div className="d-flex justify-content-center align-items-center">
        <label >
            <span className="fw-normal fs-7 text-start filter-search-label">Model</span>
            <select className="form-select outline-none fw-bold fs-6 filter-search-select">
                <option value="" className=" fw-bold fs-6">
                    
                </option>
                <option value="" className=" fw-bold fs-6">
                    BMW XM
                </option>
                <option value="" className=" fw-bold fs-6">
                    BMW X7
                </option>
                <option value="" className=" fw-bold fs-6">
                   BMW X6
                </option>
            </select>
        </label>
        <div className="vertical-line"></div>
    </div>
)

const Price = ()=>(
    
        <label >
            <span className="fw-normal fs-7 text-start filter-search-label ">Price</span>
            <select className="form-select outline-none fw-bold fs-6 filter-search-select">
                <option value="" className=" fw-bold fs-6">
                    
                </option>
                <option value="" className=" fw-bold fs-6">
                   10000
                </option>
                <option value="" className=" fw-bold fs-6">
                   15000
                </option>
                <option value="" className=" fw-bold fs-6">
                20000
                </option>
            </select>
        </label>
        
    
)

export const FilterAndSearch = ()=>{
    return(
        <>
            <section>
                <h1 className="text-center fw-bold fs-2 filter-search-section-title">Which vehicles you are looking for? </h1>
                <div className="d-flex justify-content-center align-items-center filter-search-box
                gap-32">
                    <Type/>
                    <Make/>
                    <Year/>
                    <Model/>
                    <Price/>
                    <button className="btn btn-primary Search-button "><i class="bi bi-search">Search</i></button>
                </div>
            </section>
        </>
    )
}


