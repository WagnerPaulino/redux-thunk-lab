import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOneQuestionarioData } from '../actions/index';
import { Link } from "react-router-dom";

class QuestionarioEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentWillMount() {
      this.props.getOne(this.props.location.state)
    }

    componentWillReceiveProps(newProps) {
      this.setState({
        ...newProps.questionario
      })
    }
    
    render() {
      console.log(this.state);
      if(this.state.data) {
        return (
            <div>
                <h1>Questionario Form</h1>
                <input value={this.state.data.index} onChange={()=>{}}/>
                <input value={this.state.data.nome} onChange={()=>{}}/>
                <input value={this.state.data.tag} onChange={()=>{}}/>
                <button><Link to="/">Voltar</Link></button>
            </div>
        )
      }
      return (
        <div></div>
      )
    }

}

const mapStateToProps = state => {
    return {
      questionario: state
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return { getOne: bindActionCreators(fetchOneQuestionarioData, dispatch) }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuestionarioEdit);