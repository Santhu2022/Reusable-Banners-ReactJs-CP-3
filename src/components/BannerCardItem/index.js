import './index.css'

const Banner = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`${className} card`}>
      <div className="details-container">
        <h1 className="header-text">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banner
