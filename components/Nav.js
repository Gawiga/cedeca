export default function Nav() {
    return (
        <div className="navbar">
            <ul>
                <li className="title"><a href="">Pagina Inicial</a></li>
                <li className="title">Sobre o Cedeca
                    <ul>
                        <li>- Transparência</li>
                        <li>- Parcerias</li>
                        <ul>
                            <li>    - Sociedade Vicentina</li>
                            <li>    - Doações</li>
                        </ul>
                    </ul>
                </li>
                <li className="title">Como Ajudar
                    <ul>
                        <li>- Como doar</li>
                        <li>- Como ser voluntário</li>
                        <li>- Próximas ações (redes sociais)</li>
                    </ul>
                </li>
                <li className="title">Entre em Contato
                    <ul>
                        <li>- Redes Sociais</li>
                        <li>- E-mail</li>
                        <li>- Endereço</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
