
function Footer(){
    return(
        <footer class="text-center text-lg-start bg-light text-muted">
            <div class="text-center p-4">
                © {new Date().getFullYear()} Copyright:
                <a class="text-reset fw-bold">ACME LTDA.</a>
            </div>
        </footer>
    )
}

export default Footer