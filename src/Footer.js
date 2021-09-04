
function Footer(props) {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <div className="text-center p-4">
                © {new Date().getFullYear()} Copyright:
                <a className="text-reset fw-bold"> ACME LTDA.</a>
            </div>
        </footer>
    )
}

export default Footer
