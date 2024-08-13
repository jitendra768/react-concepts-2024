import { Component } from "react";

class ClassBaseComponent extends Component {
  state = {
    showText: false,
    chnageColor: false,
    count: 0,
    changeCountStyle: false,
  };

  // constructor(props){
  //   super(props);;
  //   this.state = {
  //     showText: false,
  //   }
  // }

  handleClick = () => {
    // console.log("button clicked")
    const {showText,chnageColor} = this.state;
    this.setState({
      showText: !showText,
      chnageColor: !chnageColor,
    });
  };

  handleCount=()=>{
    this.setState({
      ...this.state,
      count: this.state.count +1
    })
  }

  //ComponentDidMount
  //ComponentDidUpdate
  //ComponentWillUnmount

  componentDidMount(){
    console.log("this is first time called page load")
    this.setState({
      showText: !this.state.showText,
      chnageColor: !this.state.chnageColor
    })

  }

  componentDidUpdate(prevProps,prevState){
    if(prevState && prevState.count !==this.state.count && this.state.count === 10){
      this.setState({
        ...this.state,
        changeCountStyle: true
      })
    }
  }

  render() {
    // console.log(this.state);
    const {showText,chnageColor,count,changeCountStyle} = this.state;
    return (
      <div>
        {showText ? <h3 style={{color:chnageColor?"red":"black"}}>Class based component</h3> : null}
        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this.handleCount}>Count</button>
        <h3 style={{color: changeCountStyle?"blue":"black", fontSize: changeCountStyle?"30px":"12px"}}>count is {count}</h3>
      </div>
    );
  }
}

export default ClassBaseComponent;
