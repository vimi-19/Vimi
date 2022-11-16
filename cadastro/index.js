
var corpo = document.getElementById('corpo');



var login = 
`
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="login.css">
    
</head>



<body id="corpo">
    <span class="vimi_name">Vimi</span>
    <div class="body">
        <div class="container_blur">
            <span class="container_login_signin">
            <p class="entrar"><a href="#" onclick="trocar_pagina(login)">Entrar</a></p>
            <p class="cadastrar"><a href="#" onclick="trocar_pagina(cadastro)">Cadastrar</a></p>
            </span>
            <div class="container_box">
            <span class="email">Nome</span>
            <input class="input_text"></input>
            <span class="senha">Senha</span>
            <input class="input_text" type="senha"></input>

                <span class="continuar">Entrar</span>
                <span class="ou">OU</span>
                <div class="icons">
                    <img src="./images/icon1.png" alt="">
                    <img src="./images/icon2.png" alt="">
                </div>

                <p id="frase">Esqueceu a sua senha?</p>
                <span class="continuar">Recuperar Senha</span>
            </div>
        </div>
        <div class="painter">
            <img src="./images/painter.png">
        </div>

    </div>

</body>


`;







var cadastro = 
`


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastre-se</title>
    <link rel="stylesheet" href="styles.css">
    <script src="index.js"></script>
</head>


<body id="corpo">
    <span class="vimi_name">Vimi</span>
    <div class="body">
        <div class="container_blur">
            <span class="container_login_signin">
            <p class="entrar"><a href="#" onclick="trocar_pagina(login)">Entrar</a></p>
            <p class="cadastrar"><a href="#" onclick="trocar_pagina(cadastro)">Cadastrar</a></p> 
            </span>
            <div class="container_box">
            <span class="email">Email</span>
            <input class="input_text"></input>
            <span class="senha">Senha</span>
            <input class="input_text" type="senha"></input>

                <span class="continuar">Continuar</span>
                <span class="ou">OU</span>
                <div class="icons">
                    <img src="./images/icon1.png" alt="">
                    <img src="./images/icon2.png" alt="">
                </div>
            </div>
        </div>
        <div class="painter">
            <img src="./images/painter.png">
        </div>

    </div>

</body>


`;






function trocar_pagina(paremetro){

corpo.innerHTML = paremetro;

}