import React from "react"

class SessaoUsuario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogado: false,
      isAdmin: false,
      idUsuario: null
    }
  }

  render() {
    const componentesFilhos = React.Children.map(this.props.children, child => {
      if (React.isValidElement(child))
          return React.cloneElement(child, { isLogado: this.state.isLogado })
      return child
    })

    return (
      <>
        {componentesFilhos}
      </>
    )
  }
}

export default SessaoUsuario
