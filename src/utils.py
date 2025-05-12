def get_token():
    try:
        with open('token.txt', 'r') as f:
            token = f.read().strip()
        return token
    except FileNotFoundError:
        print('O Token não encontrado. Faça o seu login primeiro.')
        return None
