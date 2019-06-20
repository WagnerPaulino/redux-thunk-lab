import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { fetchQuestionarioData } from '../actions/index';
import { Link } from "react-router-dom";

class QuestionarioEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    render() {
        return (
            <div>
                <h1>Questionario Form</h1>
                <button><Link to="/">Voltar</Link></button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      questionario: null
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return { getData: bindActionCreators({}, dispatch) }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuestionarioEdit);