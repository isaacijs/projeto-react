import React from 'react';
import Total from '../../../components/Total/Total';
import Button from '../../../components/Button/Button';

interface IProps {
    children: React.ReactNode;
}

class Home extends React.Component<IProps>{
    state = {
        total:1,
      }
    
      addTotal = () => {
        this.setState((state:any) => {
          return {total: state.total + 1}
        })
      }
    
      subTotal = () => {
        this.setState((state:any) => {
          return {total: state.total - 1}
        })
      }
    
      render() {
        return (
          <div className='container'>
            <Total>{this.state.total}</Total>
    
            <Button onClick={this.addTotal}>+</Button>
            <Button onClick={this.subTotal}>-</Button>
          </div>
        );
      }
}

export default Home;
