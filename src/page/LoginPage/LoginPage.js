export const LoginPage = () => {
    return(
        <form className="loginform">
            <h1>
                Вход
            </h1>
            <div>
                <input type="text" placeholder="Логин" name="login"/>
            </div>
            <div>
            <input type="password" placeholder="Пароль" name="password"/>
            </div>
            <div>
                <button>
                    Войти
                </button>
            </div>
        </form>
    )
}