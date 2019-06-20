import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuestionarioData } from '../actions/index';
import { Link } from "react-router-dom";

class QuestionarioData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.props.getData();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      data: newProps.questionarios
    })
  }

  render() {
    if (!this.state.data) {
      return (
        <div>
          No Data
        </div>
      )
    } else {
      return (
        <div>
          <h1>Questionarios</h1>
          {this.state.data.map(d => (
            <div key={d.index}>
              <hr></hr>
              <p>Nome: {d.nome}</p>
              <p>Tag: {d.tag}</p>
              <p>Descricao: {d.descricao}</p>
              <button>
                <Link to={{pathname:"/edit", state:d.index }}>
                  Detalhes
                </Link>
              </button>
              <hr></hr>
            </div>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    questionarios: state.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getData: bindActionCreators(fetchQuestionarioData, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionarioData);