import React from "react";
import propTypes from "prop-types";
import ReactDOM from "react-dom";
import noScroll from "no-scroll";
import "./index.scss";

class HubModal extends React.Component {
  state = { width: window.outerWidth, showPortal: this.props.open };

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.outerWidth });
  };

  handleKeydown = e => {
    if (e.keyCode === 27) {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    if (this.props.closeOnEsc) {
      document.addEventListener("keydown", this.handleKeydown);
    }
    // Block scroll when initial prop is open
    if (this.props.open) {
      this.blockScroll();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && nextProps.open) {
      this.setState(
        {
          showPortal: true
        },
        () => {
          this.blockScroll();
        }
      );
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    if (this.props.closeOnEsc) {
      document.removeEventListener("keydown", this.handleKeydown);
    }
    this.unblockScroll();
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  onClickOverlay = e => {
    const { closeOnOverlayClick } = this.props;
    if (!closeOnOverlayClick || typeof e.target.className !== "string") {
      return;
    }
    const className = e.target.className.split(" ");
    if (
      className.indexOf("HubModal__overlay") !== -1 &&
      !this.isScrollBarClick(e)
    ) {
      e.stopPropagation();
      this.props.onCloseModal();
    }
  };

  onClickCloseIcon = e => {
    e.stopPropagation();
    this.props.onCloseModal();
  };

  isScrollBarClick = e => e.clientX >= document.documentElement.offsetWidth;

  handleKeydown = e => {
    if (e.keyCode === 27) {
      this.props.onCloseModal();
    }
  };

  handleExited = () => {
    this.setState({ showPortal: false });
    this.unblockScroll();
  };

  // eslint-disable-next-line class-methods-use-this
  blockScroll() {
    noScroll.on();
  }

  unblockScroll = () => {
    const openedModals = document.getElementsByClassName(
      this.props.classes.modal
    );
    if (openedModals.length === 1) {
      noScroll.off();
    }
  };

  render = () => {
    const {
      headerTitle: title,
      headerIcon: icon,
      headerAction: haction,
      headerAside: aside,
      headerClose: close,
      children: content,
      footerAction: action,
      footerAside: actionAside,
      centered,
      fullHeight,
      fullHeightMobile,
      noFooter,
      alert,
      info,
      open,
      onCloseModal
    } = this.props;
    const isMobile = this.state.width <= 760;
    return open ? (
      <div
        onClick={this.HandleClose}
        className={
          fullHeightMobile && isMobile && !close
            ? "HubModal__overlay HubModal__overlay-full-height-mobile"
            : "HubModal__overlay"
        }
        onMouseDown={this.onClickOverlay}
      >
        <div
          className={
            fullHeightMobile && isMobile && !close
              ? !close
                ? "HubModal HubModal-full-height-mobile HubModal-full"
                : centered
                  ? "HubModal HubModal--Centered HubModal-full-height-mobile"
                  : "HubModal HubModal-full-height-mobile"
              : centered ? "HubModal HubModal--Centered" : "HubModal"
          }
        >
          {icon || title || aside ? (
            <div className="HubModal__Header">
              {haction && (isMobile ? (close ? false : true) : false) ? (
                <div className="HubModal__Header__Action">{haction}</div>
              ) : null}
              <div className="HubModal__Header__Content">
                {icon ? icon : null} {title ? title : null}
              </div>
              {aside && (isMobile ? (close ? false : true) : false) ? (
                <div className="HubModal__Header__Aside">{aside}</div>
              ) : isMobile ? (
                close ? (
                  true
                ) : (
                  false
                )
              ) : true ? (
                <div
                  className="HubModal__Header__close"
                  onClick={onCloseModal}
                />
              ) : null}
            </div>
          ) : null}
          <div
            className={
              fullHeight && !isMobile
                ? "HubModal__Content HubModal__Content-fullHeight"
                : "HubModal__Content "
            }
          >
            {content ? content : null}
          </div>
          {!noFooter && (isMobile ? (close ? true : false) : true) ? (
            <div
              className={
                alert
                  ? "HubModal__Footer HubModal__Footer--aside"
                  : info
                    ? "HubModal__Footer HubModal__Footer--centered"
                    : "HubModal__Footer"
              }
            >
              {action ? (
                <div className="HubModal__Footer__Action">{action}</div>
              ) : null}
              {actionAside ? (
                <div className="HubModal__Footer__Aside">{actionAside}</div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    ) : null;
  };
}

// HubModal.propTypes = {
//   closeOnEsc: PropTypes.bool,
//   closeOnOverlayClick: PropTypes.bool,
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   children: PropTypes.node,
//   little: PropTypes.bool,
//   showCloseIcon: PropTypes.bool
// };

// HubModal.defaultProps = {
//   closeOnEsc: true,
//   closeOnOverlayClick: true,
//   showCloseIcon: true,
//   children: null,
//   little: false
// };
export default HubModal;
