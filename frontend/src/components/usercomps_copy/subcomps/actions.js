import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";
export const asyncFunc = async ()=> {
    try {
      const response = await axios.get("/user/getstatus");
      if(response.status!==403){
      this.setState({
            ...this.state,
            isAuthenticated:true,
            user:response.data.user,
            isLoading:false
        })
        console.log(this.state)
        const setauth=this.props.auth[1]
        setauth(this.state)
    }
    } catch (error) {
       this.setState({
           ...this.state,
           isLoading:false
       })
    }
  }