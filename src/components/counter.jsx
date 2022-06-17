import React, { Component } from "react";
class counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  render() {
    return (
      <React.Fragment>
        <h1> Fuck the world</h1>
        {this.formatCount()}
        <button onClick={this.clickMeHandler} className={this.btnClass()}>
          Click Me
        </button>
        {this.state.tags.length === 0 && (
          <p className="text-muted"> Plz Enter number</p>
        )}
        {this.cheakTags()}
      </React.Fragment>
    );
  }
  clickMeHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  btnClass = () => {
    let classBtn = `btn btn-sm m-4 btn-`;
    classBtn += this.state.count === 0 ? "warning" : "primary";
    return classBtn;
  };
  formatCount() {
    const { count } = this.state;
    return count === 0 ? (
      <h1>sorry</h1>
    ) : (
      <h1 className="badge badge-primary text-primary">{this.state.count}</h1>
    );
  }
  cheakTags() {
    if (this.state.tags.length === 0) return <p>Add some tags</p>;
    else
      return (
        <ul style={{ listStyle: "none" }}>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }
}

export default counter;
