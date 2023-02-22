const Notification = props => {
  const {box,box-text,image-url,logo}=props;
  return(<div className={`${box}`}>
          <p>{box-text}</p>
          <img src={`${image-url}`}/>
  </div>)
}

const element = (
    <div>
    <h1>Notifications</h1>
     <Notification box="box-1"  image-url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" box-text="Information Message" image-size="logo" />
      <Notification box="box-2"  image-url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" box-text="Success Message" image-size="logo" />
       <Notification box="box-3"  image-url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" box-text="Warning Message" image-size="logo" />
        <Notification box="box-4"  image-url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" box-text="Error Message" image-size="logo" />
      </div>
)

ReactDOM.render(element, document.getElementById('root'))
