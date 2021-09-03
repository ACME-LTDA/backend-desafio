import React from "react"

class SessaoUsuario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogado: false,
      isAdmin: false,
      idUsuario: null,
      token: null
    }
  }

  setSessao = (id, isAdmin, token) => {
    this.setState({
      isLogado: true,
      isAdmin: isAdmin,
      idUsuario: id,
      token: token
    })
  }

  render() {
    const componentesFilhos = React.Children.map(this.props.children, child => {
      if (React.isValidElement(child))
          return React.cloneElement(child, { sessao: this.state, setSessao: this.setSessao })
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
