import {Component} from 'react';
import classNames from 'classnames';

const app = {};

class Footer extends Component {
  render () {
    const activeTodoWord = app.Utils.pluralize(this.props.count, 'item');
    let clearButton = null;

    if (this.props.completedCount > 0) {
      clearButton = (
        <button
          className="clear-completed"
          onClick={this.props.onClearCompleted}>
          Clear completed
        </button>
      );
    }

    const nowShowing = this.props.nowShowing;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.count}</strong> {activeTodoWord} left
        </span>
        <ul className="filters">
          <li>
            <a
            href="#/"
            className={classNames({selected: nowShowing === app.ALL_TODOS})}>All</a>
          </li>
          {' '}
          <li>
            <a
              href="#/active"
              className={classNames({selected: nowShowing === app.ACTIVE_TODOS})}>Active</a>
          </li>
          {' '}
          <li>
            <a
              href="#/completed"
              className={classNames({selected: nowShowing === app.COMPLETED_TODOS})}>Completed</a>
          </li>
        </ul>
        {clearButton}
      </footer>
    );
  }
}

export default Footer;
