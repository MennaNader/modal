import React from "react";
import ReactDOM from "react-dom";
import HubModal from "./modal.jsx";

export default class s extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Open modal</button>
        <HubModal
          open={this.state.open}
          onCloseModal={this.onCloseModal}
          headerAction={<button>Hello</button>}
          headerTitle="Hello"
          headerAside={<button>Hello</button>}
          footerAction={<button>Hello</button>}
          footerAside={<button>Hi</button>}
          headerAction={<button>Hi</button>}
          centered
          fullHeight
          fullHeightMobile
          noFooter
          alert
          info={false}
        >
          <p>
            Ipsum pariatur reprehenderit incididunt cupidatat proident labore
            enim nostrud ullamco. Commodo proident elit culpa deserunt
            consectetur aute fugiat nostrud. Pariatur pariatur magna magna
            officia consequat sunt et anim minim est.
          </p>
          <p>
            Ipsum pariatur reprehenderit incididunt cupidatat proident labore
            enim nostrud ullamco. Commodo proident elit culpa deserunt
            consectetur aute fugiat nostrud. Pariatur pariatur magna magna
            officia consequat sunt et anim minim est.
          </p>
          <p>
            Ipsum pariatur reprehenderit incididunt cupidatat proident labore
            enim nostrud ullamco. Commodo proident elit culpa deserunt
            consectetur aute fugiat nostrud. Pariatur pariatur magna magna
            officia consequat sunt et anim minim est.
          </p>
          <p>
            Ipsum pariatur reprehenderit incididunt cupidatat proident labore
            enim nostrud ullamco. Commodo proident elit culpa deserunt
            consectetur aute fugiat nostrud. Pariatur pariatur magna magna
            officia consequat sunt et anim minim est.
          </p>
          <p>
            Ipsum pariatur reprehenderit incididunt cupidatat proident labore
            enim nostrud ullamco. Commodo proident elit culpa deserunt
            consectetur aute fugiat nostrud. Pariatur pariatur magna magna
            officia consequat sunt et anim minim est.
          </p>
          <p>
            Ipsum pariatur reprehenderit incididunt cupidatat proident labore
            enim nostrud ullamco. Commodo proident elit culpa deserunt
            consectetur aute fugiat nostrud. Pariatur pariatur magna magna
            officia consequat sunt et anim minim est.
          </p>
          <p>
            Ipsum pariatur reprehenderit incididunt cupidatat proident labore
            enim nostrud ullamco. Commodo proident elit culpa deserunt
            consectetur aute fugiat nostrud. Pariatur pariatur magna magna
            officia consequat sunt et anim minim est.
          </p>
          <p>
            Ipsum pariatur reprehenderit incididunt cupidatat proident labore
            enim nostrud ullamco. Commodo proident elit culpa deserunt
            consectetur aute fugiat nostrud. Pariatur pariatur magna magna
            officia consequat sunt et anim minim est.
          </p>
          <p>
            Ipsum pariatur reprehenderit incididunt cupidatat proident labore
            enim nostrud ullamco. Commodo proident elit culpa deserunt
            consectetur aute fugiat nostrud. Pariatur pariatur magna magna
            officia consequat sunt et anim minim est.
          </p>
          <p>
            Ipsum pariatur reprehenderit incididunt cupidatat proident labore
            enim nostrud ullamco. Commodo proident elit culpa deserunt
            consectetur aute fugiat nostrud. Pariatur pariatur magna magna
            officia consequat sunt et anim minim est.
          </p>
          <p>
            Ipsum pariatur reprehenderit incididunt cupidatat proident labore
            enim nostrud ullamco. Commodo proident elit culpa deserunt
            consectetur aute fugiat nostrud. Pariatur pariatur magna magna
            officia consequat sunt et anim minim est.
          </p>
          <p>
            Ipsum pariatur reprehenderit incididunt cupidatat proident labore
            enim nostrud ullamco. Commodo proident elit culpa deserunt
            consectetur aute fugiat nostrud. Pariatur pariatur magna magna
            officia consequat sunt et anim minim est.
          </p>s
        </HubModal>
      </div>
    );
  }
}
