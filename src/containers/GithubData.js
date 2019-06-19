import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGithubData } from '../actions/index';

class GithubData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  
  componentWillMount() {
    this.props.getData();
  }

  componentWillReceiveProps(newProps){
    this.setState({
      data: newProps.questionario
    })
  }
  
  render() {
    if (!this.state.data) {
      return (
        <div>
          No Data
        </div>
      )
    }
    return (
      <div>
        <div>
          Name: {this.state.data.nome}
        </div>
        <br />
        <div>
          Tag: {this.state.data.tag}
        </div>
        <br />
        <div>
        Descricao: {this.state.data.descricao}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionario: state.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getData: bindActionCreators(fetchGithubData, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubData);